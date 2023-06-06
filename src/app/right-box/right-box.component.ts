import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-box',
  templateUrl: './right-box.component.html',
  styleUrls: ['./right-box.component.scss']
})
export class RightBoxComponent implements OnInit {
  slide = [
    { text: 'Parmanent Hiring', img: 'https://indihire.com/wp-content/uploads/2022/06/IndiHire-Icons-Copy-20.png' },
    { text: 'AI enabled compus and lateral platfor', img: 'https://indihire.com/wp-content/uploads/2022/05/work-at-indihire.png' },
    { text: 'AquaHire', img: 'https://indihire.com/wp-content/uploads/2022/03/market-research.png' },
    { text: 'Sales Hiring', img: 'https://indihire.com/wp-content/uploads/2023/04/sales-hiring-01.png' },
    { text: "RPO", img: 'https://indihire.com/wp-content/uploads/2022/03/finest-talent.png' },
    { text: "IT & Digital perm recruitment", img: 'https://indihire.com/wp-content/uploads/2022/06/IndiHire-Icons-Copy-19.png' },
    { text: "Diversity & Inclusion", img: 'https://indihire.com/wp-content/uploads/2022/05/employees.png' },
    { text: 'Excutive Search', img: 'https://indihire.com/wp-content/uploads/2022/06/IndiHire-Icons-Copy-18.png' },
    { text: 'IT Staffing', img: 'https://indihire.com/wp-content/uploads/2022/03/deep-domain.png' }
  ];

  currentIndex = 0;

  ngOnInit() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.slide.length;
    }, 2000);
  }
}
