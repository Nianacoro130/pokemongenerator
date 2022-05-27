import React, { useState , useEffect} from 'react';
import axios from 'axios';

const Pokemon = () => {

    const url = "https://pokeapi.co/api/v2/pokemon/";
    const [myname , setName] = useState('');  
    const [myhp , setHp] = useState('');
    const [myattack, setAttack]= useState('');
    const [mydefense, setdefense] = useState('');
    const [myspeed , setSpeed] = useState('');
    const [mypic , setImage]= useState('');
    const [typeone , setTypeOne]= useState('');
    const [typetwo , setTypeTwo]=useState('');
    
    const cards = document.getElementById("cards");

    const typesColor = {
        bug: "#26de81",
        dragon : "#ffeaa7",
        electric :"#fed330",
        fairy : "#FF0069",
        fighting : "#30336b",
        fire:"#f0932b",
        flying:"#81ecec",
        grass:"#00b894",
        ground:"#EFB549",
        ghost:"#a55eea",
        ice:"#74b9ff",
        normal:"#95afc0",
        poison:"#6c5ce7",
        psychic:"#a29bfe",
        rock:"#2d3436",
        water:"#0190ff"

    };

   
   
   
   useEffect(() => {


    async function getPokemon()  {

        // affiche le premier pokemon
        let  id = 1 
         await axios.get(url+id).then(res => {

            setName(res.data.name)
            setHp(res.data.stats[0].base_stat)
            setAttack(res.data.stats[2].base_stat)
            setdefense(res.data.stats[2].base_stat)
            setSpeed(res.data.stats[5].base_stat)
            setImage(res.data.sprites.other.dream_world.front_default)
            setTypeOne(res.data.types[0].type.name);
            setTypeTwo(res.data.types[1].type.name);
            
            
        
        })

    }
    getPokemon()
    
    },[])


    function generate(){


        let id = Math.floor(Math.random()* 150 + 1);

        axios.get(url+id).then(res => {
                
            setName(res.data.name)
            setHp(res.data.stats[0].base_stat)
            setAttack(res.data.stats[2].base_stat)
            setdefense(res.data.stats[2].base_stat)
            setSpeed(res.data.stats[5].base_stat)
            setImage(res.data.sprites.other.dream_world.front_default);
            setTypeOne(res.data.types[0].type.name);

            if(res.data.types[1].type.name !== null){
            setTypeTwo(res.data.types[1].type.name);
            }

            const themeColor = typesColor[res.data.types[0].type.name]
        
        

            let cardstylecolor = (color) => {

                cards.style.background =  `radial-gradient(circle at 50% 0%, ${color}, 36% , #ffff 36%)`;
                
                cards.querySelectorAll(".pokemon-types span").forEach((typeColor) => { 
                    typeColor.style.backgroundColor = color ;
                });

            };

            cardstylecolor(themeColor)

        });

       
    };
    
    return (
        <>
            <div className='container'>
                <div className='card-pokemon' id='cards'>
                    <p className='hp-pokemon'>
                        HP  
                        <span>{myhp}</span>
                    </p>
                    <img src={mypic} alt="pokemon-view" /> 
                    <h2 className='pokemon-name'>{myname}</h2>

                    <div className='pokemon-types'>  
                    <span>{typeone}</span>
                    <span>{typetwo}</span>

                    </div>
                    <div className='pokemon-stats'>
                        <div>
                            <h3>{myattack}</h3>
                            <p>Attack</p>
                        </div>
                        <div>
                            <h3>{mydefense}</h3>
                            <p>Defense</p>
                        </div>
                        <div>
                            <h3>{myspeed}</h3>
                            <p>Speed</p>
                            
                        </div>
                    </div>
                </div>
            </div>;
            <div className='btn'>
                <button id='btn' onClick={generate }>Generator</button>
               
            </div>
        </>
    );
};

export default Pokemon;