import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import "./Admin.css"
import {createCar, createMark, createmodel, fetchCar, fetchMark, fetchModel} from "../http/CarApi";
import {Button, Dropdown, Form, Row, Col} from "react-bootstrap";
import Cheker from "../validateValue/validateValues";

const Admin = observer(() => {
   /* const [carsVisible,setCarsVisible]=useState(false)
    const [marksVisible,setMarksVisible]=useState(false)
    const [modelsVisible,setModelsVisible]=useState(false)*/
    const {car}=useContext(Context)
    const [name,setName]=useState('')
    const [price,setPrice]=useState(0)
    const [file,setFile]=useState(null)
  /*  const [mark,setMark]=useState(null)
    const [model,setModel]=useState(null)*/
    const [info,setInfo]=useState([])

    const [value,setValue]=useState('')
    const [values,setValues]=useState('')
    const [brandDirty,setBrandDirty]=useState(false)
    const [markDirty,setMarkDirty]=useState(false)
    const [priceDirty,setPriceDirty]=useState(false)
    const [NameDirty,setNameDirty]=useState(false)
    const [Eror,setEror]=useState("Строка не может быть пустой")
    const [Erors,setErors]=useState("Строка не может быть пустой")
    const [Errors,setErrors]=useState("Строка не может быть пустой")

    const [Errorrs,setErrorrs]=useState("Строка не может быть пустой")


    useEffect(()=>{
        fetchMark().then(data=>car.setMarks(data))
        fetchModel().then(data=>car.setModels(data))
        fetchCar().then(data=>car.setCars(data.rows))
    },[])


    const addInfo=()=>{

        setInfo([...info,{title:'',description:'',number:Date.now()}])

    }

    const removeInfo=(number)=>{

        setInfo(info.filter(i=>i.number !== number))

    }



    const addMark=()=>{
        createMark({name:value}).then(data=>setValue(''))

    }



    const addModel=()=>{
        createmodel({name:values}).then(data=>setValues(''))

    }

    const selectFile=e=>{
        setFile(e.target.files[0])

    }

    const changeInfo=(key,value,number)=>{

        setInfo(info.map(i=>i.number===number ? {...i,[key]:value}:i))


    }

    const addCar=()=>{


        const formData=new FormData()

        formData.append('name',name)
        formData.append('price',`${price}`)
        formData.append('img',file)
        const {id: id1} = car.selectedMark;
        formData.append('markId',id1)
        const {id} = car.selectedModel;
        formData.append('modelId',id)
        formData.append('info',JSON.stringify(info))
        createCar(formData).then(r => alert('Добавлено'))

    }


    const blurHandler=(e)=>{

        switch (e.target.name){
            case 'brand':
                setBrandDirty(true)
                break
            case 'mark':
                setMarkDirty(true)
                break
            case 'name':
                setNameDirty(true)
                break
            case 'price':
                priceDirty(true)
                break

        }
    }
    const BrandHandler=(e)=>{
        setValue(e.target.value)
        let result=Cheker.brandCheck(e.target.value)
        if(!result){
            setEror("Некоректное значение")
            if(!e.target.value){
                setEror("Строка не может быть пустой")
            }
        }else{
            setEror("")

        }


    }

    const MarkHandler=(e)=>{
        setValues(e.target.value)

           let result=Cheker.AllComponents(e.target.value)
            if(!result){
                setErors("Строка не может быть пустой")

            } else{
                setErors("")

    }


    }


    const NameHandler=(e)=>{
        setName(e.target.value)

        let result=Cheker.AllComponents(e.target.value)
        if(!result){
            setErrors("Строка не может быть пустой")

        } else{
            setErrors("")

        }


    }






    const PriceHandler=(e)=>{
        setPrice(Number(e.target.value))

        let result=Cheker.PriceCheck(Number(e.target.value))
        if(result){
            setErrorrs("")

        } else{
            setErrorrs("Некорректное число")

        }


    }




    return (


        <div id="content" >
            <div className="content">
                <div className='center'>
                    <h3>Добавление марки</h3>
                    {(brandDirty && Eror) && <div style={{color:'red'}}>{Eror}</div>}
                <input type="text" name="brand" value={value}
                       onBlur={e=>blurHandler(e)}
                       onChange={e=>BrandHandler(e)}
                       placeholder="Введите название марки" className="type-1"/>
                    <button className="floating-button"

                            onClick={addMark}


                    >добавить</button>
                </div>


                <div className='center'>
                    <h3>Добавление модели</h3>
                    {(markDirty && Erors) && <div style={{color:'red'}}>{Erors}</div>}
                    <input type="text"
                           name="mark"
                           onBlur={e=>blurHandler(e)}
                           value={values}
                           onChange={e=> MarkHandler(e)}
                           placeholder="Введите название модели" className="type-1"/>
                    <button className="floating-button" onClick={addModel}>добавить</button>
                </div>


                <div className='centers'>
                    <h3>Добавление машины</h3>

     {/*               <select  >
                        <option >Выберите марку</option>
                        {car.marks.map(mark=>
                            <option key={mark.id} value={mark.id} onClick={console.log("asdasd")}>{mark.name}</option>

                        )}

                    </select>*/}
                    <Dropdown className="mt-2 mb-2">
                    <Dropdown.Toggle>{car.selectedMark.name || "Выберите тип"}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {car.marks.map(mark =>
                            <Dropdown.Item
                                onClick={() => car.setSelectedMark(mark)}
                                key={mark.id}
                            >
                                {mark.name}
                            </Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                    </Dropdown>




                {/*    <select className="select-css" >
                        <option>Выберите модель</option>
                        {car.models.map(model=>
                            <option key={model.id} value={model.id} onChange={()=>car.setSelectedModel(model)} >{model.name}</option>

                        )}

                    </select>*/}


                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{car.selectedModel.name || "Выберите тип"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {car.models.map(model =>
                                <Dropdown.Item
                                    onClick={() => car.setSelectedModel(model)}
                                    key={model.id}
                                >
                                    {model.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>

                    {(NameDirty && Errors) && <div style={{color:'red'}}>{Errors}</div>}
                    <input type="text"
                           onBlur={e=>blurHandler(e)}
                           onChange={e=>NameHandler(e)}
                           value={name}
                           name="name"
                           placeholder="Введите машину"
                           className="type-1"
                    />

                    {( priceDirty && Errorrs) && <div style={{color:'red'}}>{Errorrs}</div>}
                    <input type="number"
                           onChange={e=>PriceHandler(e)}
                           value={price}
                           placeholder="Введите цену"
                           className="type-1"
                           name="price"
                           onBlur={e=>blurHandler(e)}
                    />

                    <button onClick={addInfo} >добавить свойство</button>

                    {info.map(i=>
                        <div className='infos' key={i.number} >
                            <input type="text"
                                    value={i.title}
                                   onChange={(e)=>{changeInfo('title',e.target.value,i.number)}}
                                   placeholder="Введите название свойства" className="type-1"/>
                            <input type="text"
                                   value={i.description}
                                   onChange={(e)=>{changeInfo('description',e.target.value,i.number)}}
                                   placeholder="Введите описание свойства" className="type-1"/>

                            <button className="floating-button-del" onClick={()=>removeInfo(i.number)}>Удалить</button>
                        </div>


                    )}

                    <h5>Добавление фото</h5>
                    <input type="file"  onChange={e=>setFile(Number(e.target.value))} className="type-1" onChange={selectFile}/>


                    <button className="floating-button" onClick={addCar} >добавить</button>
                </div>
            </div>
        </div>
    );
});

export default Admin;