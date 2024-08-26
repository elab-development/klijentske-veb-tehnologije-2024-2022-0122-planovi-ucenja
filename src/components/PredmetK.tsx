import './PredmetK.css'

import { Predmet as PredmetType } from '../models/Predmet';

interface PredmetProps {
  predmet: PredmetType;
}

const Predmet: React.FC<PredmetProps> = ({predmet}) => {
  return (
    <div className='Predmet-container'>
        <p className='predmet'>{predmet.ime}</p>
        <p className='predmet predmet-esbp'>{predmet.brojESBP} ESBP</p>
    </div>
  )
}

export default Predmet