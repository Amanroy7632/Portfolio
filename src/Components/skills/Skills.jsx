import React from 'react'
import './../skills/skills.css'
function Skills() {
    const skillData=[
        {id:1,
        skillName:"C",
        amount:20},
        {id:2,
        skillName:"C++",
        amount:70},
        {id:3,
        skillName:"Python",
        amount:40},
        {id:4,
        skillName:"Java",
        amount:50},
        {id:5,
        skillName:"HTML",
        amount:80},
        {id:6,
        skillName:"CSS",
        amount:45},
        {id:7,
        skillName:"Tailwind",
        amount:60},
        {id:8,
        skillName:"JavaScript",
        amount:60},
        {id:9,
            skillName:"React js",
            amount:50}
    ]
  return (
    <section class="skill" id="skill">
        <h1 class="heading">
            <span>SKILLS</span>
        </h1>
        <div class="skill-container flex justify-center items-center flex-wrap gap-[2rem] m-[5rem]">
            {
                skillData.map((data)=>{
                    return (<div key={data.id} class="skill-box bg-[#323946]">
                    <div className= {`skill-progress w-[20rem] h-[6.4rem] bg-gray-400 border border-[rgb(39, 38, 38)] rounded-[20px] `}>
                        <div className={`flex justify-center h-full ${data.amount>=50?"bg-blue-500":data.amount>=40?"bg-red-400":"bg-indigo-500"}`} style={{width:`${data.amount}%`}}>
                            <div class="skill-name flex items-center justify-center">
                                <span className=' text-white text-4xl items-center' >{data.skillName}</span>
                            </div>
                        </div>
                    </div>
                </div>);
                })
            }
            <div class="skill-box dark:text-white bg-slate-400 ">
                <div class="qualification">
                    <h2>Qualifications</h2>
                    <ul>
                        <li>12 <sup>th</sup> with 75% marks.</li>
                        <li>B.Tech CSE from AGC,Amritsar</li>
                        <li>1st Sem :7.87sgpa</li>
                        <li>2nd Sem :8.52sgpa</li>
                        <li>3rd Sem :7.35sgpa</li>
                    </ul>
                </div>
            </div>


        </div>
    </section>
  )
}

export default Skills
