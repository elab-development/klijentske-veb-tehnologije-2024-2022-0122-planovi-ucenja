import './PredmetK.css'

import { Predmet as PredmetType } from '../models/Predmet';

interface PredmetProps {
  ime:string,
  brojESBP:number,
  polozen?:boolean
}

const Predmet: React.FC<PredmetProps> = ({ime,brojESBP,polozen}) => {
  return (
    <div className='Predmet-container'>
        <p className='predmet'>{ime}</p>
        <p className='predmet predmet-esbp'>{brojESBP} ESBP</p>
    </div>
  )
}

export default Predmet