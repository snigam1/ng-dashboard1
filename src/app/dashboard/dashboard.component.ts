import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  layout = {
    cards: {
      infoPacks: [{
        title: 'Electric Cars',
        bodyContent:'The average cost of electricity in the US is 12 cents per kWh. Therefore, the average person driving the average EV 15,000 miles per year pays about $540.00 per year to charge it. The cost of electricity throughout the US varies much more than gasoline does, but its cost over time is much more stable.',
        owner: 'James Shuttle',
        logoUrl: 'http://www.interpals.com/wp-content/uploads/2016/02/logo-endoll-cotxe-electric.jpg',
        clients: 5,
        contacts:12,
        dealAmount: 10,
        notes: 5,
        meetings:10 

      }, {
        title: 'Big Data Disruption',
        bodyContent:'The availability of data on an unprecedented scale has already changed the way that so many organisations work. Corporations such as banks have recognised the merit in upping digitalisation to save on time and resources. Administrative bodies, infamous for processing reams of, more...',
        owner: 'Edmund O\'Connell',
        logoUrl: 'https://go.forrester.com/f/b/users/HKISKER/picture1.jpg',
        clients: 12,
        contacts:20,
        dealAmount: 5,
        notes: 15,
        meetings:20 

      }, 
      {
        title: 'SK Hynix Business Trip',
        bodyContent:'With the trend of IT devices getting smarter and having more enhanced mobility functions, more advanced semiconductor specifications are being required. With 30 years of expertise in semiconductor production and operation, SK Hynix is dedicated to continuous R&D and  more...',
        owner: 'Charles Cheng',
        logoUrl: 'https://www.pcper.com/files/imagecache/article_max_width/news/2018-01-23/SK%20Hynix%20logo.jpg',
        clients: 3,
        contacts:31,
        dealAmount: 2,
        notes: 0,
        meetings:3 
        
      }, {
        title: 'Tesla Market Research',
        bodyContent:'Tesla may not say it quite as directly, but looking at the sales numbers for their original models, men (and specifically, tech-savvy innovative adopters, with money) made up almost 90% of electric vehicle sales. The Model S has been extremely successful, and in many ways, the S saved  more...',
        owner: 'Estelle Ng',
        logoUrl: 'http://www.carlogos.org/logo/Tesla-logo-2003-2500x2500.png',
        clients: 10,
        contacts:120,
        dealAmount: 15,
        notes: 25,
        meetings:30 
      },
      {
        title: 'Mitsubishi',
        bodyContent:'Mitsubishi Motors Corporation (MMC) today announced full-year financial results for Fiscal Year 2017 ended March 31, 2018',
        owner: 'Nigamananda Sahoo',
        logoUrl: 'https://img00.deviantart.net/873a/i/2011/237/2/b/mitsubishi_logo_icon_ico_by_mahesh69a-d47uo6a.png',
        type: 'company',
        clients: 2,
        contacts:6,
        dealAmount: 1.2,
        notes: 2,
        meetings:4 
      },
      {
        title: 'SMIG',
        bodyContent:'To foster a Team SMFG spirit, we arrange for interchanges between employees of different Group companies and seek to promote Group ties through human resources strategies,...',
        owner: 'Nadia Znachko',
        logoUrl: 'http://vtown.vn/uploads/company/333/thumbnail/smbc_logo_09.gif',
        type: 'company',
        clients: 2,
        contacts: 20,
        dealAmount: 3,
        notes: 11,
        meetings:4 
      },
    ],
      companies: [{
        name: 'Mitsubishi',
        logoUrl: 'https://img00.deviantart.net/873a/i/2011/237/2/b/mitsubishi_logo_icon_ico_by_mahesh69a-d47uo6a.png'
      },
      // {
      //   name: 'GIC',
      //   logoUrl: 'data:image/png;base64,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'
      // },
      
      {
        name: 'Sumimoto Mitsui Investment Group',
        logoUrl: 'http://vtown.vn/uploads/company/333/thumbnail/smbc_logo_09.gif'
      }],
      newsFeed: [{
        author: 'Rachel Mui',
        authorId: '001',
        expanded: false,
        header: 'Singapore stocks: STI resumes flat on Wednesday afternoon at 3,615.7',
        text: 'SINGAPORE stocks resumed trading flat on Wednesday afternoon, with the Straits Times Index inching up 1.77 points to 3,615.7 as at 1pm. Losers outnumbered gainers 208 to 151, after about 1.25 billion shares worth S$887 million changed hands. The most actively traded counter by volume was Ezion, which fell 6.6 per cent, or 0.8 Singapore cent to 11.3 Singapore cents, with 48.4 million shares traded. Other active stocks included Venture Corp, which was down 6.8 per cent to S$19.53; and OCBC Bank which was up by 1.23 per cent to S$13.97.'
      },{
        author: 'Helen Wong',
        authorId: '002',
        expanded: false,
        header: 'Singapore&amp;#039;s Changi airport may use facial recognition systems to find late passengers',
        text: 'Ever been delayed on a flight because of straggling fellow passengers. That might be an annoyance of the past at Singapore\'s Changi airport which is testing facial recognition systems that could, in future, help locate lost travellers or those spending a little too much time in the duty-free shops.'
      }],
      meetings: [
        {
            subject: 'Lunch with David Ryan',
            location: 'Shinji By Kanesaka',
            datetime: '1:00 PM',
            duration: '2 hours'
        },
        {
          subject: 'Team catch up',
          datetime: '2:30 PM',
          duration: '30 min',
          location: 'Excelian Singapore Boardroom, Dial in 0280 664433'
        },
        {
          subject: 'Follow up meeting with Charlie',
          location: 'Molly Malone\'s',
          datetime: '4:00 PM',
          duration: '2 hours'
        },        
      ],
      tasks: [
        {
            taskId: 'T051',
            description:'Monthly report',
            dueDate:'12/05/2018'
        },
        {
          taskId: 'T054',
          description:'Followup gic',
          dueDate:'14/05/2018'
        },
        {
          taskId: 'T055',
          description:'Account creation',
          dueDate:'14/05/2018'
        },
      ],
      deals: [{
        dealId: '001',
        investmentName: 'project AI',
        dateReceived: '02/01/2018',
        dealTeam: 'Team1, ABC',
        pipelineStatus: 'in progress',
        dealDescription: 'A tech focused fund ',
        investmentAmount: '78.2',
        lastUpdatedDate: '16/05/2018',
      },{
        dealId: '002',
        investmentName: 'Mission mars',
        dateReceived: '04/03/2018',
        dealTeam: 'Team2, Excelian',
        pipelineStatus: 'New',
        dealDescription: 'AI expertise',
        investmentAmount: '2-5',
        lastUpdatedDate: '12/06/2018',
      }]
    }
  };

  constructor() { }

  ngOnInit() {

  }

}
