import { v4 as uuidv4 } from "uuid";
import gn1 from './assets/img/gn1.jpg';
import mr1 from './assets/img/mr1.jpg'
import lm1 from  './assets/img/lmt1.jpg'
import md1 from './assets/img/md1.jpg';
import nb1 from './assets/img/nb1.jpg';
import sg1 from './assets/img/sg1.jpg';
import sm1 from './assets/img/sm1.jpg';
import  Mariposas from './assets/audio/Mariposas.wav';
import limitless from './assets/audio/limitless.wav';
import Generacion from './assets/audio/Generacion.wav';
import madDreams from './assets/audio/madDreams.wav';
import nebulosa from './assets/audio/nebulosa.wav';
import sundayMorning from './assets/audio/sundayMorning.wav'
import superGirl from './assets/audio/superGirl.wav'

function MusicHolder() {
    return [
        {
            name: 'Mariposa de Alas Negras',
            cover: mr1,
            artist: 'Mr.Nova',
            audio: Mariposas,
            color: ['#fd78cb', '#29f2fe'],
            id: uuidv4(),
            active: true,
        },
        {
            name: 'La Generación Dormida',
            cover: gn1,
            artist: 'Mr.Nova',
            audio: Generacion,
            color: ['#d786c4', '#ffabaa'],
            id: uuidv4(),
            active: false,
        },
        {
            name: 'Limitless',
            cover: lm1,
            artist: 'Pau.Nova',
            color: ['#e8a955', '#98674c'],
            audio: limitless,
            id: uuidv4(),
            active: false,
        },
        {
            name: 'Mad Dreams',
            cover: md1,
            artist: 'Pau.Nova',
            audio: madDreams,
            color: ['#d9717c', '#e6a634'],
            id: uuidv4(),
            active: false,
        },
        {
            name: 'Nebulosa',
            cover: nb1,
            artist: 'Pau.Nova',
            audio: nebulosa,
            color: ['#d8bbda', '#bd9a6d'],
            id: uuidv4(),
            active: false,
        },
        {
            name: 'Sunday Morning',
            cover: sm1,
            artist: 'Pau.Nova',
            audio: sundayMorning,
            color: ['#dcc5e4', '#f7d38a'],
            id: uuidv4(),
            active: false,
        },
        {
            name: 'Super Girl',
            cover: sg1,
            artist: 'Pau.Nova',
            audio: superGirl,
            color: ['#d1011b', '#ff642c'],
            id: uuidv4(),
            active: false,
        },
        
    ];
}

export default MusicHolder;