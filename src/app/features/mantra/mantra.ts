import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export type MantraType =
  | 'vakratunda'
  | 'kubera'
  | 'mahamrityunjaya'
  | 'rama'
  | 'vishnu'
  | 'mangalam-vishnu'
  | 'gayatri'
  | 'saraswati'
  | 'durga'
  | null;

interface MantraData {
  id: NonNullable<MantraType>;
  title: string;
  subtitle: string;
  deity: string;
  icon: string;
  mantra: string;
  transliteration: string;
}

@Component({
  selector: 'app-mantra',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mantra.html',
  styleUrl: './mantra.scss'
})
export class MantraComponent {

  selectedMantra: MantraType = null;

  mantraDetails: Record<NonNullable<MantraType>, MantraData> = {

    vakratunda: {
      id: 'vakratunda',
      title: 'Vakratunda Ganesha Mantra',
      subtitle: 'Prayer to Lord Ganesha for removal of obstacles',
      deity: 'Lord Ganesha',
      icon: '🐘',
      mantra: `श्री वक्रतुण्ड महाकाय सूर्य कोटी समप्रभा।
निर्विघ्नं कुरु मे देव सर्व-कार्येशु सर्वदा॥`,
      transliteration: `Shree Vakratunda Mahakaya Suryakoti Samaprabha।
Nirvighnam Kuru Me Deva Sarva-Kaaryeshu Sarvada॥`
    },

    kubera: {
      id: 'kubera',
      title: 'Kubera Mantra',
      subtitle: 'Prayer to Lord Kubera for wealth and prosperity',
      deity: 'Lord Kubera',
      icon: '💰',
      mantra: `ॐ यक्षाय कुबेराय वैश्रवणाय धनधान्याधिपतये
धनधान्यसमृद्धिं मे देहि दापय स्वाहा॥`,
      transliteration: `Om Yakshaya Kuberaya Vaishravanaya Dhanadhanyadhipataye
Dhanadhanyasamriddhim Me Dehi Dapaya Svaha॥`
    },

    mahamrityunjaya: {
      id: 'mahamrityunjaya',
      title: 'Maha Mrityunjaya Mantra',
      subtitle: 'Sacred mantra dedicated to Lord Shiva',
      deity: 'Lord Shiva',
      icon: '🔱',
      mantra: `ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्
उर्वारुकमिव बन्धनान् मृत्योर्मुक्षीय मामृतात्॥`,
      transliteration: `Om Tryambakam Yajamahe Sugandhim Pushti-Vardhanam
Urvarukamiva Bandhanan Mrityormukshiya Mamritat॥`
    },

    rama: {
      id: 'rama',
      title: 'Rama Taraka Mantra',
      subtitle: 'Sacred name mantra dedicated to Lord Rama',
      deity: 'Lord Rama',
      icon: '🏹',
      mantra: `श्री राम जय राम जय जय राम॥`,
      transliteration: `Shri Rama Jaya Rama Jaya Jaya Rama॥`
    },

    vishnu: {
      id: 'vishnu',
      title: 'Vishnu Bhagawate Vasudevaya Mantra',
      subtitle: 'Sacred mantra dedicated to Lord Vishnu',
      deity: 'Lord Vishnu',
      icon: '🪷',
      mantra: `ॐ नमोः भगवते वासुदेवाय॥`,
      transliteration: `Om Namoh Bhagawate Vasudevaya॥`
    },

    'mangalam-vishnu': {
      id: 'mangalam-vishnu',
      title: 'Mangalam Bhagwan Vishnu Mantra',
      subtitle: 'Auspicious prayer to Lord Vishnu',
      deity: 'Lord Vishnu',
      icon: '🌺',
      mantra: `मङ्गलम् भगवान विष्णुः, मङ्गलम् गरुडध्वजः।
मङ्गलम् पुण्डरी काक्षः, मङ्गलाय तनो हरिः॥`,
      transliteration: `Mangalam Bhagwan Vishnuh, Mangalam Garudadhwajah।
Mangalam Pundari Kakshah, Mangalaya Tano Harih॥`
    },

    gayatri: {
      id: 'gayatri',
      title: 'Gayatri Mantra',
      subtitle: 'Sacred Vedic mantra dedicated to Savitr',
      deity: 'Gayatri',
      icon: '☀️',
      mantra: `ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं
भर्गो देवस्यः धीमहि धियो यो नः प्रचोदयात्॥`,
      transliteration: `Om Bhur Bhuwah Svah Tat Savitur Varenyam
Bhargo Devasya Dhimahi Dhiyo Yo Nah Prachodayat॥`
    },

    saraswati: {
      id: 'saraswati',
      title: 'Saraswati Puranokta Mantra',
      subtitle: 'Prayer to Goddess Saraswati for knowledge and learning',
      deity: 'Goddess Saraswati',
      icon: '📖',
      mantra: `या देवी सर्वभूतेषु विद्यारूपेण संस्थिता।
नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः॥`,
      transliteration: `Ya Devi Sarvabhuteshu Vidyarupena Samsthita।
Namastasyai Namastasyai Namastasyai Namo Namah॥`
    },

    durga: {
      id: 'durga',
      title: 'Durga Stuti Mantra',
      subtitle: 'Prayer to Goddess Durga for protection and auspiciousness',
      deity: 'Goddess Durga',
      icon: '🪔',
      mantra: `ॐ सर्वमङ्गलमङ्गल्ये शिवे सर्वार्थसाधिके।
शरण्ये त्र्यम्बके गौरि नारायणि नमोऽस्तुते॥
ॐ सर्वस्वरूपे सर्वेशे सर्वशक्तिसमन्विते।
भयेभ्यस्त्राहि नो देवि दुर्गे देवि नमोऽस्तुते`,
      transliteration: `Om Sarvamangala Mangalye Shive Sarvartha Sadhike।
Sharanye Tryambake Gauri Narayani Namoastute॥
Om Sarva Swarupe Sarveshe Sarvashakti Samanvite।
Bhayebhyastrahi No Devi Durge Devi Namoastute॥`
    }

  };

  mantraList: MantraData[] = Object.values(this.mantraDetails);

  selectMantra(type: MantraType): void {
    this.selectedMantra = type;
  }
}