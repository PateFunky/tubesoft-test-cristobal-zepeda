import { useState } from 'react';
import {useDispatch} from 'react-redux';
import { addRecords } from '../actions';
import { Button } from 'antd';
import './Chronometer.css';

export const Chronometer = () => {
    const [time, setTime] = useState({ms:0,s:0,m:0,h:0});
    const [status, setStatus] = useState(0);
    const [inter, setInter] = useState();
  

    const dispatch = useDispatch();
    const start = () => {
        run();
        setStatus(1);
        setInter(setInterval(run,10));
        
    }

    const stop = () => {
        clearInterval(inter);
        setStatus(2);
    }


    const reset = () =>{
        clearInterval(inter);
        setStatus(0);
        dispatch(addRecords({
            records:time.h + ':'+ time.m +':'+ time.s +':'+ time.ms
        }))
        setTime({ms:0,s:0,m:0,h:0});
        
    }

    const resume = () => start();

    let updateMs = time.ms , updateS = time.s, updateM= time.m, updateH= time.h;

    const run = ()=>{
       if(updateM === 60){
           updateH++;
           updateM = 0;
       }
       if(updateS=== 60){
        updateM++;
        updateS=0;
       }
       if(updateMs === 100){
           updateS++;
           updateMs = 0;
       }
       updateMs++;
       return setTime({ms:updateMs,s:updateS,m:updateM,h:updateH})
    }

    return (
        <div>
            <div>
            <h1>
                <span>{(time.h >= 10) ? time.h : '0'+time.h}</span>&nbsp;:&nbsp;
                <span>{(time.m >= 10) ? time.m : '0'+time.m}</span>&nbsp;:&nbsp;
                <span>{(time.s >= 10) ? time.s : '0'+time.s}</span>&nbsp;:&nbsp;
                <span>{(time.ms >= 10) ? time.ms : '0'+time.ms}</span>
            </h1>
            </div>
            <div>
                { (status === 0) ?
                    <div className='chronometerButtons'>
                    <Button onClick={start} type="primary">Start</Button> 
                    </div>:''   
                }
                {
                    (status===1) ? 
                    <div className='chronometerButtons'>
                        <span className='chronometerButtons'>
                            <Button onClick={stop}>Stop</Button>
                        </span>
                        <span className='chronometerButtons'>
                            <Button type='primary' danger onClick={reset}>Restart</Button>
                        </span>
                    
                    </div>
                    : ''
                }
                 {
                    (status===2) ? 
                    <div className='chronometerButtons'>
                        <span className='chronometerButtons'>
                            <Button onClick={resume}>Resume</Button>
                        </span>
                        <span className='chronometerButtons'>
                            <Button type='primary' danger onClick={reset}>Restart</Button>
                        </span>
                    
                    </div>
                    : ''
                }

                
            </div>
        </div>
    )
}

