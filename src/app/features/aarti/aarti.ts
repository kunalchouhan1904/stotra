import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export type AartiType =
  | 'ganesh'
  | 'vishnu'
  | 'shiva'
  | 'durga'
  | null;

interface AartiData {
  id: NonNullable<AartiType>;
  title: string;
  subtitle: string;
  deity: string;
  icon: string;
  verses: string[];
}

@Component({
  selector: 'app-aarti',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aarti.html',
  styleUrl: './aarti.scss'
})
export class AartiComponent {

  selectedAarti: AartiType = null;

  aartiDetails: Record<NonNullable<AartiType>, AartiData> = {

    /* =====================================================
       1. GANESH AARTI
    ====================================================== */

    ganesh: {
      id: 'ganesh',
      title: 'Shree Ganesh Ji Ki Aarti',
      subtitle: 'Jai Ganesh Jai Ganesh — Aarti of Lord Ganesha',
      deity: 'Lord Ganesha',
      icon: '🐘',
      verses: [
        `जय गणेश जय गणेश जय गणेश देवा।
माता जाकी पार्वती पिता महादेवा।
एक दंत दयावंत चार भुजा धारी,
माथे सिंदूर सोहे मूस की सवारी।
हार चढ़े फूल चढ़े और चढ़े मेवा,
लड्डूअन का भोग लगे संत करें सेवा।`
      ]
    },


    /* =====================================================
       2. VISHNU AARTI
    ====================================================== */

    vishnu: {
      id: 'vishnu',
      title: 'Shree Vishnu Ji Ki Aarti',
      subtitle: 'Om Jai Jagdish Hare — Aarti of Lord Vishnu',
      deity: 'Lord Vishnu',
      icon: '🪷',
      verses: [
        `ॐ जय जगदीश हरे, स्वामी जय जगदीश हरे।
भक्त जनों के संकट क्षण में दूर करे।
जो ध्यावे फल पावे, दुःख बिन से मन का,
स्वामी दुःख बिन से मन का।
सुख सम्पत्ति घर आवे, कष्ट मिटे तन का।`
      ]
    },


    /* =====================================================
       3. SHIVA AARTI
    ====================================================== */

    shiva: {
      id: 'shiva',
      title: 'Shree Shiv Ji Ki Aarti',
      subtitle: 'Om Jai Shiv Omkara — Aarti of Lord Shiva',
      deity: 'Lord Shiva',
      icon: '🔱',
      verses: [
        `ॐ जय शिव ओमकारा, स्वामी जय शिव ओमकारा।
ब्रह्मा विष्णु सदाशिव अर्द्धांगी धारा।
एकानन चतुरानन पंचानन राजै,
हंसासन गरुड़ासन वृषवाहन साजै।`
      ]
    },


    /* =====================================================
       4. DURGA AARTI
    ====================================================== */

    durga: {
      id: 'durga',
      title: 'Shree Durga Mata Ki Aarti',
      subtitle: 'Jai Ambe Gauri — Aarti of Goddess Durga',
      deity: 'Goddess Durga',
      icon: '🌺',
      verses: [
        `जय अम्बे गौरी, मैया जय्या अम्बे गौरी।
निर्शको को तुम सुख दीनी, जग सुख की कतरी।
माग सिंदूर विराजत टीको मृगगम को,
उज्ज्वल से दो नैना चंद्रवदन निको।`
      ]
    }

  };


  /* =====================================================
     AARTI COLLECTION
  ====================================================== */

  aartiList: AartiData[] = Object.values(this.aartiDetails);


  /* =====================================================
     SELECT AARTI
  ====================================================== */

  selectAarti(type: AartiType): void {
    this.selectedAarti = type;
  }

}