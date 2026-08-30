import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export type StotraType = 'jagannath' | null;

interface StotraData {
  title: string;
  subtitle: string;
  deity: string;
  verses: string[];
}

@Component({
  selector: 'app-stotra',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stotra.html',
  styleUrl: './stotra.scss'
})
export class StotraComponent {

  selectedStotra: StotraType = null;

  stotraDetails: Record<NonNullable<StotraType>, StotraData> = {

    jagannath: {
      title: 'Shree Jagannath Aarti',
      subtitle: 'Aarti of Lord Jagannath',
      deity: 'Lord Jagannath',

      verses: [

        `॥ श्री जगन्नाथ आरती ॥`,

        `जय जगन्नाथ स्वामी, प्रभु जय जगन्नाथ।
भक्त जनों के तुमने, सदा दिया साथ॥
जय जगन्नाथ स्वामी॥`,

        `पुरी धाम विराजे, नीलाचल माहीं।
सुभद्रा बलभद्र संग, ज्योति अनन्त छाहीं॥
जय जगन्नाथ स्वामी॥`,

        `विशाल नेत्र सुन्दर, अधर मन्द मुस्काना।
इन्द्रनील मणि जैसा, रूप अति सुहाना॥
जय जगन्नाथ स्वामी॥`,

        `छप्पन भोग प्रसादम, अन्नक्षेत्र भारी।
सब जाति का भेद मिटा, प्रभु कृपा हमारी॥
जय जगन्नाथ स्वामी॥`,

        `रथ यात्रा में निकले, तीनों रथ सजाये।
नन्दिघोष पर बैठे, भक्तन सुख पाये॥
जय जगन्नाथ स्वामी॥`,

        `चैतन्य महाप्रभु ने, नाम किया उच्चार।
जगन्नाथ जगन्नाथ, प्रेम का संसार॥
जय जगन्नाथ स्वामी॥`,

        `महाप्रसाद पावन, जो कोई ग्रहण करे।
सब पापन से मुक्त, जन्म जन्म सुख भरे॥
जय जगन्नाथ स्वामी॥`,

        `श्री जगन्नाथ जी की, आरती जो गावे।
कहत सदा सुखकारी, मोक्ष पद पावे॥
जय जगन्नाथ स्वामी॥`,

        `॥ इति श्री जगन्नाथ आरती सम्पूर्ण ॥`

      ]
    }

  };


  stotraList: StotraData[] = Object.values(this.stotraDetails);


  selectStotra(type: StotraType): void {
    this.selectedStotra = type;
  }

}