import { Component, OnInit, Input } from '@angular/core';
import { Record } from './record.model';
import { PaginationInstance } from 'ngx-pagination';
@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.css']
})
export class RecordListComponent implements OnInit {
  records: Record[] = [
    {
      userId: 'mfattorini0',
      callTime: '10:18 AM',
      duration: 1,
      phoneNumber: '606-218-5868',
      operatorId: 'gduchart0'
    },
    {
      userId: 'jtointon1',
      callTime: '11:21 PM',
      duration: 2,
      phoneNumber: '387-643-5235',
      operatorId: 'lhanton1'
    },
    {
      userId: 'bwharmby2',
      callTime: '4:51 AM',
      duration: 3,
      phoneNumber: '473-281-0773',
      operatorId: 'elewin2'
    },
    {
      userId: 'edighton3',
      callTime: '12:10 PM',
      duration: 4,
      phoneNumber: '624-922-4464',
      operatorId: 'jmasse3'
    },
    {
      userId: 'tdmitrovic4',
      callTime: '5:37 PM',
      duration: 5,
      phoneNumber: '995-216-5966',
      operatorId: 'ewyrill4'
    },
    {
      userId: 'gnorbury5',
      callTime: '5:36 PM',
      duration: 6,
      phoneNumber: '315-299-4803',
      operatorId: 'gcroom5'
    },
    {
      userId: 'lmaclardie6',
      callTime: '8:57 AM',
      duration: 7,
      phoneNumber: '281-169-8858',
      operatorId: 'gtemperley6'
    },
    {
      userId: 'bmacarte7',
      callTime: '7:50 AM',
      duration: 8,
      phoneNumber: '646-719-9210',
      operatorId: 'ghay7'
    },
    {
      userId: 'crathmell8',
      callTime: '5:53 PM',
      duration: 9,
      phoneNumber: '379-475-4303',
      operatorId: 'cboliver8'
    },
    {
      userId: 'lhancill9',
      callTime: '2:40 AM',
      duration: 10,
      phoneNumber: '825-535-5332',
      operatorId: 'dranby9'
    },
    {
      userId: 'kdadda',
      callTime: '10:28 AM',
      duration: 11,
      phoneNumber: '948-818-9842',
      operatorId: 'ebartolomieua'
    },
    {
      userId: 'hdornb',
      callTime: '6:46 AM',
      duration: 12,
      phoneNumber: '515-528-3288',
      operatorId: 'hharvieb'
    },
    {
      userId: 'jmahmoodc',
      callTime: '8:32 AM',
      duration: 13,
      phoneNumber: '446-881-4581',
      operatorId: 'blabadinic'
    },
    {
      userId: 'bpepind',
      callTime: '11:00 PM',
      duration: 14,
      phoneNumber: '466-788-9665',
      operatorId: 'fwegmand'
    },
    {
      userId: 'sshebere',
      callTime: '6:23 AM',
      duration: 15,
      phoneNumber: '107-410-1093',
      operatorId: 'htoee'
    },
    {
      userId: 'vkilbanf',
      callTime: '3:56 PM',
      duration: 16,
      phoneNumber: '148-248-2715',
      operatorId: 'ekienleinf'
    },
    {
      userId: 'tanwylg',
      callTime: '4:42 PM',
      duration: 17,
      phoneNumber: '869-192-4885',
      operatorId: 'jrobrowg'
    },
    {
      userId: 'ahynardh',
      callTime: '10:58 AM',
      duration: 18,
      phoneNumber: '640-759-1111',
      operatorId: 'kcrippellh'
    },
    {
      userId: 'lthundermani',
      callTime: '1:15 AM',
      duration: 19,
      phoneNumber: '542-452-5026',
      operatorId: 'rhanfordi'
    },
    {
      userId: 'adwyrj',
      callTime: '9:06 PM',
      duration: 20,
      phoneNumber: '874-627-5695',
      operatorId: 'gbevesj'
    },
    {
      userId: 'hvlasyukk',
      callTime: '1:18 PM',
      duration: 21,
      phoneNumber: '793-885-7213',
      operatorId: 'mbreinlk'
    },
    {
      userId: 'nshyrel',
      callTime: '11:53 PM',
      duration: 22,
      phoneNumber: '680-897-2161',
      operatorId: 'eleghl'
    },
    {
      userId: 'gbestwickm',
      callTime: '6:25 PM',
      duration: 23,
      phoneNumber: '261-220-8604',
      operatorId: 'jdoughertym'
    },
    {
      userId: 'rwallikern',
      callTime: '10:03 AM',
      duration: 24,
      phoneNumber: '370-808-2933',
      operatorId: 'bsumsionn'
    },
    {
      userId: 'nlabitto',
      callTime: '12:46 AM',
      duration: 25,
      phoneNumber: '365-366-2857',
      operatorId: 'boverpoolo'
    },
    {
      userId: 'swaleworkep',
      callTime: '5:36 PM',
      duration: 26,
      phoneNumber: '405-923-8708',
      operatorId: 'hchadwinp'
    },
    {
      userId: 'kbrittlebankq',
      callTime: '2:16 PM',
      duration: 27,
      phoneNumber: '300-334-6787',
      operatorId: 'amchirrieq'
    },
    {
      userId: 'apiggremr',
      callTime: '9:05 AM',
      duration: 28,
      phoneNumber: '752-106-3378',
      operatorId: 'pmcclintockr'
    },
    {
      userId: 'jwestwells',
      callTime: '11:07 PM',
      duration: 29,
      phoneNumber: '787-465-5682',
      operatorId: 'folvers'
    },
    {
      userId: 'cstolbergt',
      callTime: '1:37 PM',
      duration: 30,
      phoneNumber: '771-301-6846',
      operatorId: 'rmcalindent'
    },
    {
      userId: 'cskyppu',
      callTime: '2:28 PM',
      duration: 31,
      phoneNumber: '507-110-9927',
      operatorId: 'pmenhciu'
    },
    {
      userId: 'livanchikovv',
      callTime: '10:38 PM',
      duration: 32,
      phoneNumber: '673-976-9422',
      operatorId: 'jswinfonv'
    },
    {
      userId: 'xpodmorew',
      callTime: '12:51 AM',
      duration: 33,
      phoneNumber: '949-831-0208',
      operatorId: 'gmacartneyw'
    },
    {
      userId: 'zbroadfootx',
      callTime: '3:37 AM',
      duration: 34,
      phoneNumber: '945-573-8876',
      operatorId: 'rwhybrayx'
    },
    {
      userId: 'lclemmensy',
      callTime: '12:40 PM',
      duration: 35,
      phoneNumber: '165-675-0451',
      operatorId: 'cprobatey'
    },
    {
      userId: 'pklejnaz',
      callTime: '8:19 AM',
      duration: 36,
      phoneNumber: '861-540-2368',
      operatorId: 'ewolfordz'
    },
    {
      userId: 'jsimkovich10',
      callTime: '10:48 AM',
      duration: 37,
      phoneNumber: '477-967-6826',
      operatorId: 'ltinan10'
    },
    {
      userId: 'aessex11',
      callTime: '7:09 AM',
      duration: 38,
      phoneNumber: '883-820-9279',
      operatorId: 'mminghetti11'
    },
    {
      userId: 'bcosgrave12',
      callTime: '10:26 PM',
      duration: 39,
      phoneNumber: '508-617-5109',
      operatorId: 'apauls12'
    },
    {
      userId: 'lleap13',
      callTime: '8:21 AM',
      duration: 40,
      phoneNumber: '440-973-8183',
      operatorId: 'ceastop13'
    },
    {
      userId: 'wskones14',
      callTime: '6:20 AM',
      duration: 41,
      phoneNumber: '346-416-7219',
      operatorId: 'schattaway14'
    },
    {
      userId: 'ekrol15',
      callTime: '10:57 PM',
      duration: 42,
      phoneNumber: '279-577-7847',
      operatorId: 'hbenda15'
    },
    {
      userId: 'bgoodfellow16',
      callTime: '11:07 PM',
      duration: 43,
      phoneNumber: '557-531-4725',
      operatorId: 'gdeddum16'
    },
    {
      userId: 'anorval17',
      callTime: '1:22 AM',
      duration: 44,
      phoneNumber: '755-301-0797',
      operatorId: 'dpetyankin17'
    },
    {
      userId: 'egiovannilli18',
      callTime: '1:24 AM',
      duration: 45,
      phoneNumber: '848-790-6827',
      operatorId: 'efaichney18'
    },
    {
      userId: 'cladel19',
      callTime: '11:42 AM',
      duration: 46,
      phoneNumber: '749-840-5326',
      operatorId: 'ssirette19'
    },
    {
      userId: 'rpucker1a',
      callTime: '4:35 PM',
      duration: 47,
      phoneNumber: '885-809-4208',
      operatorId: 'epittet1a'
    },
    {
      userId: 'cmacanulty1b',
      callTime: '2:31 PM',
      duration: 48,
      phoneNumber: '926-535-8693',
      operatorId: 'bcancellieri1b'
    },
    {
      userId: 'reckert1c',
      callTime: '7:33 PM',
      duration: 49,
      phoneNumber: '855-908-7865',
      operatorId: 'rtubby1c'
    },
    {
      userId: 'rhave1d',
      callTime: '2:58 AM',
      duration: 50,
      phoneNumber: '812-448-2154',
      operatorId: 'ewybern1d'
    },
    {
      userId: 'etubble1e',
      callTime: '11:48 PM',
      duration: 51,
      phoneNumber: '801-831-4061',
      operatorId: 'fcaughtry1e'
    },
    {
      userId: 'lgreger1f',
      callTime: '6:40 PM',
      duration: 52,
      phoneNumber: '914-698-3435',
      operatorId: 'gbartlomiej1f'
    },
    {
      userId: 'coloshkin1g',
      callTime: '5:28 AM',
      duration: 53,
      phoneNumber: '198-152-3368',
      operatorId: 'jcosti1g'
    },
    {
      userId: 'sfrankowski1h',
      callTime: '9:22 PM',
      duration: 54,
      phoneNumber: '343-381-0751',
      operatorId: 'wjerke1h'
    },
    {
      userId: 'cpendall1i',
      callTime: '10:40 AM',
      duration: 55,
      phoneNumber: '118-890-3014',
      operatorId: 'ghollerin1i'
    },
    {
      userId: 'rdonahue1j',
      callTime: '2:25 AM',
      duration: 56,
      phoneNumber: '896-729-6893',
      operatorId: 'kcristofol1j'
    },
    {
      userId: 'scalam1k',
      callTime: '4:32 AM',
      duration: 57,
      phoneNumber: '716-930-3944',
      operatorId: 'msouten1k'
    },
    {
      userId: 'swolverson1l',
      callTime: '8:48 PM',
      duration: 58,
      phoneNumber: '351-878-9940',
      operatorId: 'ddavydenko1l'
    },
    {
      userId: 'sandreazzi1m',
      callTime: '8:13 AM',
      duration: 59,
      phoneNumber: '755-158-5562',
      operatorId: 'wwhitticks1m'
    },
    {
      userId: 'msemens1n',
      callTime: '9:52 PM',
      duration: 60,
      phoneNumber: '382-909-1934',
      operatorId: 'tfutter1n'
    },
    {
      userId: 'myegorkov1o',
      callTime: '2:29 PM',
      duration: 61,
      phoneNumber: '328-246-2371',
      operatorId: 'cwickie1o'
    },
    {
      userId: 'lzorzetti1p',
      callTime: '9:49 AM',
      duration: 62,
      phoneNumber: '270-495-9218',
      operatorId: 'ewaine1p'
    },
    {
      userId: 'aturney1q',
      callTime: '9:47 PM',
      duration: 63,
      phoneNumber: '238-354-4097',
      operatorId: 'eshillaker1q'
    },
    {
      userId: 'mpastor1r',
      callTime: '1:42 AM',
      duration: 64,
      phoneNumber: '811-453-4111',
      operatorId: 'bkachel1r'
    },
    {
      userId: 'sbrokenbrow1s',
      callTime: '11:02 AM',
      duration: 65,
      phoneNumber: '985-511-5848',
      operatorId: 'olinnit1s'
    },
    {
      userId: 'aszymanek1t',
      callTime: '7:17 PM',
      duration: 66,
      phoneNumber: '510-568-2335',
      operatorId: 'aobispo1t'
    },
    {
      userId: 'gdavinet1u',
      callTime: '4:05 PM',
      duration: 67,
      phoneNumber: '957-280-5865',
      operatorId: 'kscholtz1u'
    },
    {
      userId: 'dleas1v',
      callTime: '7:15 AM',
      duration: 68,
      phoneNumber: '107-143-2898',
      operatorId: 'mheinz1v'
    },
    {
      userId: 'egosse1w',
      callTime: '8:58 AM',
      duration: 69,
      phoneNumber: '328-780-8685',
      operatorId: 'taiken1w'
    },
    {
      userId: 'ghaggleton1x',
      callTime: '2:35 AM',
      duration: 70,
      phoneNumber: '441-141-4172',
      operatorId: 'tmapletoft1x'
    },
    {
      userId: 'jmarsham1y',
      callTime: '3:15 PM',
      duration: 71,
      phoneNumber: '923-849-7509',
      operatorId: 'rgonzales1y'
    },
    {
      userId: 'erobertshaw1z',
      callTime: '5:45 PM',
      duration: 72,
      phoneNumber: '878-282-6228',
      operatorId: 'mwhistan1z'
    },
    {
      userId: 'kcecchetelli20',
      callTime: '1:11 AM',
      duration: 73,
      phoneNumber: '782-369-4481',
      operatorId: 'sodgaard20'
    },
    {
      userId: 'lorchard21',
      callTime: '8:51 AM',
      duration: 74,
      phoneNumber: '783-544-5104',
      operatorId: 'swolpert21'
    },
    {
      userId: 'amacgillreich22',
      callTime: '11:11 AM',
      duration: 75,
      phoneNumber: '416-152-8844',
      operatorId: 'cbrabban22'
    },
    {
      userId: 'darckoll23',
      callTime: '10:24 PM',
      duration: 76,
      phoneNumber: '696-326-8222',
      operatorId: 'rembery23'
    },
    {
      userId: 'hrosenkranc24',
      callTime: '6:44 PM',
      duration: 77,
      phoneNumber: '952-140-1860',
      operatorId: 'jsibbert24'
    },
    {
      userId: 'sfildes25',
      callTime: '7:03 AM',
      duration: 78,
      phoneNumber: '677-775-7748',
      operatorId: 'ecormode25'
    },
    {
      userId: 'nrosencrantz26',
      callTime: '10:42 PM',
      duration: 79,
      phoneNumber: '729-815-2163',
      operatorId: 'fdowker26'
    },
    {
      userId: 'mparrin27',
      callTime: '1:09 PM',
      duration: 80,
      phoneNumber: '225-743-1106',
      operatorId: 'bohenery27'
    },
    {
      userId: 'msaltwell28',
      callTime: '7:35 PM',
      duration: 81,
      phoneNumber: '859-154-9720',
      operatorId: 'lcuming28'
    },
    {
      userId: 'bcampion29',
      callTime: '8:23 PM',
      duration: 82,
      phoneNumber: '586-723-2997',
      operatorId: 'nlydon29'
    },
    {
      userId: 'amurkin2a',
      callTime: '2:26 PM',
      duration: 83,
      phoneNumber: '156-445-9996',
      operatorId: 'fzambonini2a'
    },
    {
      userId: 'smorrice2b',
      callTime: '12:04 PM',
      duration: 84,
      phoneNumber: '217-676-8917',
      operatorId: 'tbowcock2b'
    },
    {
      userId: 'kescale2c',
      callTime: '2:47 PM',
      duration: 85,
      phoneNumber: '712-644-0828',
      operatorId: 'flecount2c'
    },
    {
      userId: 'rvickors2d',
      callTime: '6:41 PM',
      duration: 86,
      phoneNumber: '607-336-2355',
      operatorId: 'bvivien2d'
    },
    {
      userId: 'thadenton2e',
      callTime: '10:12 PM',
      duration: 87,
      phoneNumber: '453-382-7926',
      operatorId: 'lroffe2e'
    },
    {
      userId: 'rsimmill2f',
      callTime: '1:16 PM',
      duration: 88,
      phoneNumber: '770-229-7050',
      operatorId: 'sgarraway2f'
    },
    {
      userId: 'mmallabone2g',
      callTime: '3:45 PM',
      duration: 89,
      phoneNumber: '846-522-6090',
      operatorId: 'saxton2g'
    },
    {
      userId: 'ispellard2h',
      callTime: '1:04 AM',
      duration: 90,
      phoneNumber: '593-893-2410',
      operatorId: 'asnook2h'
    },
    {
      userId: 'sporter2i',
      callTime: '3:49 AM',
      duration: 91,
      phoneNumber: '113-532-6328',
      operatorId: 'ojacobssen2i'
    },
    {
      userId: 'dmiguet2j',
      callTime: '3:04 AM',
      duration: 92,
      phoneNumber: '985-783-3671',
      operatorId: 'jastlett2j'
    },
    {
      userId: 'iceyssen2k',
      callTime: '6:36 AM',
      duration: 93,
      phoneNumber: '263-684-9197',
      operatorId: 'dbricklebank2k'
    },
    {
      userId: 'rsecker2l',
      callTime: '8:29 AM',
      duration: 94,
      phoneNumber: '427-313-1298',
      operatorId: 'bscartifield2l'
    },
    {
      userId: 'apirrey2m',
      callTime: '5:31 AM',
      duration: 95,
      phoneNumber: '721-781-2455',
      operatorId: 'craxworthy2m'
    },
    {
      userId: 'akynforth2n',
      callTime: '6:29 AM',
      duration: 96,
      phoneNumber: '265-682-4208',
      operatorId: 'jskakunas2n'
    },
    {
      userId: 'hkirke2o',
      callTime: '1:18 AM',
      duration: 97,
      phoneNumber: '661-929-8063',
      operatorId: 'kalfwy2o'
    },
    {
      userId: 'lhabercham2p',
      callTime: '6:41 PM',
      duration: 98,
      phoneNumber: '721-944-9516',
      operatorId: 'semmer2p'
    },
    {
      userId: 'hlander2q',
      callTime: '11:11 PM',
      duration: 99,
      phoneNumber: '311-791-6192',
      operatorId: 'fhruska2q'
    },
    {
      userId: 'ggladwin2r',
      callTime: '12:20 PM',
      duration: 100,
      phoneNumber: '591-544-8845',
      operatorId: 'wbusfield2r'
    }
  ];
  config: PaginationInstance = {
    itemsPerPage: 5,
    currentPage: 1
  };
  values: number[];
  constructor() {
    this.values = [5, 10, 15];
  }
  onItemsPerPageChanged(event: any): void {
    this.config.itemsPerPage = event.target.value;
    console.log('Items per page', this.config.itemsPerPage);
  }
  ngOnInit() {}
}
