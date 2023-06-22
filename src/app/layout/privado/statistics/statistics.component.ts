import { Component } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {
  procesos = [
    {
      name: 'BotPruebas',
      type: 'process',
      status: 'online',
      cpu: 0,
      ram: 0.74,
      hddHost: 46,
      ramHost: 37.75
    },
  ];

  ngOnInit () {
    this.increaseCpuValue()
  }

  async increaseCpuValue() {
    for (let i = 0; i <= 100; i++) {
      this.procesos[0].cpu = i;
      await this.delay(200);
    }
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  getBarBackground(cpu: number): string {
    if (cpu <= 10) return `linear-gradient(to right, lightgreen 0%, lightgreen 100%)`;
    if (cpu <= 11) return `linear-gradient(to right, lightgreen 0%, lightgreen 98%, green 100%)`;
    if (cpu <= 12) return `linear-gradient(to right, lightgreen 0%, lightgreen 96%, green 100%)`;
    if (cpu <= 13) return `linear-gradient(to right, lightgreen 0%, lightgreen 94%, green 100%)`;
    if (cpu <= 14) return `linear-gradient(to right, lightgreen 0%, lightgreen 92%, green 100%)`;
    if (cpu <= 15) return `linear-gradient(to right, lightgreen 0%, lightgreen 90%, green 100%)`;
    if (cpu <= 16) return `linear-gradient(to right, lightgreen 0%, lightgreen 88%, green 100%)`;
    if (cpu <= 17) return `linear-gradient(to right, lightgreen 0%, lightgreen 86%, green 100%)`;
    if (cpu <= 18) return `linear-gradient(to right, lightgreen 0%, lightgreen 84%, green 100%)`;
    if (cpu <= 19) return `linear-gradient(to right, lightgreen 0%, lightgreen 82%, green 100%)`;
    if (cpu <= 20) return `linear-gradient(to right, lightgreen 0%, lightgreen 80%, green 98%)`;
    if (cpu <= 21) return `linear-gradient(to right, lightgreen 0%, lightgreen 78%, green 96%)`;
    if (cpu <= 22) return `linear-gradient(to right, lightgreen 0%, lightgreen 76%, green 94%)`;
    if (cpu <= 23) return `linear-gradient(to right, lightgreen 0%, lightgreen 74%, green 92%)`;
    if (cpu <= 24) return `linear-gradient(to right, lightgreen 0%, lightgreen 72%, green 90%)`;
    if (cpu <= 25) return `linear-gradient(to right, lightgreen 0%, lightgreen 70%, green 88%)`;
    if (cpu <= 26) return `linear-gradient(to right, lightgreen 0%, lightgreen 68%, green 86%)`;
    if (cpu <= 27) return `linear-gradient(to right, lightgreen 0%, lightgreen 66%, green 84%)`;
    if (cpu <= 28) return `linear-gradient(to right, lightgreen 0%, lightgreen 64%, green 82%)`;
    if (cpu <= 29) return `linear-gradient(to right, lightgreen 0%, lightgreen 62%, green 80%)`;
    if (cpu <= 30) return `linear-gradient(to right, lightgreen 0%, lightgreen 60%, green 78%)`;
    if (cpu <= 31) return `linear-gradient(to right, lightgreen 0%, lightgreen 58%, green 76%)`;
    if (cpu <= 32) return `linear-gradient(to right, lightgreen 0%, lightgreen 56%, green 74%)`;
    if (cpu <= 33) return `linear-gradient(to right, lightgreen 0%, lightgreen 54%, green 72%)`;
    if (cpu <= 34) return `linear-gradient(to right, lightgreen 0%, lightgreen 52%, green 70%)`;
    if (cpu <= 35) return `linear-gradient(to right, lightgreen 0%, lightgreen 50%, green 68%)`;
    if (cpu <= 36) return `linear-gradient(to right, lightgreen 0%, lightgreen 48%, green 66%)`;
    if (cpu <= 37) return `linear-gradient(to right, lightgreen 0%, lightgreen 46%, green 64%)`;
    if (cpu <= 38) return `linear-gradient(to right, lightgreen 0%, lightgreen 44%, green 62%)`;
    if (cpu <= 39) return `linear-gradient(to right, lightgreen 0%, lightgreen 42%, green 60%)`;
    if (cpu <= 40) return `linear-gradient(to right, lightgreen 0%, lightgreen 40%, green 58%)`;
    if (cpu <= 41) return `linear-gradient(to right, lightgreen 0%, lightgreen 38%, green 56%)`;
    if (cpu <= 42) return `linear-gradient(to right, lightgreen 0%, lightgreen 36%, green 54%)`;
    if (cpu <= 43) return `linear-gradient(to right, lightgreen 0%, lightgreen 34%, green 52%)`;
    if (cpu <= 44) return `linear-gradient(to right, lightgreen 0%, lightgreen 32%, green 50%)`;
    if (cpu <= 45) return `linear-gradient(to right, lightgreen 0%, lightgreen 30%, green 48%)`;
    if (cpu <= 46) return `linear-gradient(to right, lightgreen 0%, lightgreen 28%, green 46%)`;
    if (cpu <= 47) return `linear-gradient(to right, lightgreen 0%, lightgreen 26%, green 44%)`;
    if (cpu <= 48) return `linear-gradient(to right, lightgreen 0%, lightgreen 24%, green 42%)`;
    if (cpu <= 49) return `linear-gradient(to right, lightgreen 0%, lightgreen 22%, green 40%)`;
    if (cpu <= 69) return `linear-gradient(to right, lightgreen 0%, lightgreen 20%, green 38%)`;
    if (cpu <= 70) return `linear-gradient(to right, lightgreen 0%, lightgreen 20%, green 40%)`;
    if (cpu <= 71) return `linear-gradient(to right, lightgreen 0%, lightgreen 18%, green 40%, green 99%, yellow 100%)`;
    if (cpu <= 72) return `linear-gradient(to right, lightgreen 0%, lightgreen 18%, green 40%, green 98%, yellow 100%)`;
    if (cpu <= 73) return `linear-gradient(to right, lightgreen 0%, lightgreen 16%, green 40%, green 96%, yellow 100%)`;
    if (cpu <= 74) return `linear-gradient(to right, lightgreen 0%, lightgreen 16%, green 40%, green 94%, yellow 100%)`;
    if (cpu <= 75) return `linear-gradient(to right, lightgreen 0%, lightgreen 14%, green 40%, green 92%, yellow 100%)`;
    if (cpu <= 76) return `linear-gradient(to right, lightgreen 0%, lightgreen 14%, green 40%, green 90%, yellow 100%)`;
    if (cpu <= 77) return `linear-gradient(to right, lightgreen 0%, lightgreen 12%, green 40%, green 88%, yellow 100%)`;
    if (cpu <= 78) return `linear-gradient(to right, lightgreen 0%, lightgreen 12%, green 40%, green 86%, yellow 100%)`;
    if (cpu <= 79) return `linear-gradient(to right, lightgreen 0%, lightgreen 10%, green 40%, green 84%, yellow 100%)`;
    if (cpu <= 80) return `linear-gradient(to right, lightgreen 0%, lightgreen 10%, green 40%, green 82%, yellow 100%)`;
    if (cpu <= 81) return `linear-gradient(to right, lightgreen 0%, lightgreen 10%, green 40%, green 80%, yellow 100%)`;
    if (cpu <= 82) return `linear-gradient(to right, lightgreen 0%, lightgreen 10%, green 40%, green 78%, yellow 98%, orange 100%)`;
    if (cpu <= 83) return `linear-gradient(to right, lightgreen 0%, lightgreen 10%, green 40%, green 76%, yellow 96%, orange 100%)`;
    if (cpu <= 84) return `linear-gradient(to right, lightgreen 0%, lightgreen 10%, green 38%, green 74%, yellow 94%, orange 100%)`;
    if (cpu <= 85) return `linear-gradient(to right, lightgreen 0%, lightgreen 10%, green 36%, green 72%, yellow 92%, orange 100%)`;
    if (cpu <= 86) return `linear-gradient(to right, lightgreen 0%, lightgreen 10%, green 34%, green 70%, yellow 90%, orange 100%)`;
    if (cpu <= 87) return `linear-gradient(to right, lightgreen 0%, lightgreen 8%, green 32%, green 68%, yellow 88%, orange 100%)`;
    if (cpu <= 88) return `linear-gradient(to right, lightgreen 0%, lightgreen 8%, green 30%, green 66%, yellow 86%, orange 100%)`;
    if (cpu <= 89) return `linear-gradient(to right, lightgreen 0%, lightgreen 8%, green 28%, green 64%, yellow 84%, orange 100%)`;
    if (cpu <= 90) return `linear-gradient(to right, lightgreen 0%, lightgreen 8%, green 24%, green 62%, yellow 82%, orange 100%)`;
    if (cpu <= 91) return `linear-gradient(to right, lightgreen 0%, lightgreen 8%, green 22%, green 60%, yellow 80%, orange 100%)`;
    if (cpu <= 92) return `linear-gradient(to right, lightgreen 0%, lightgreen 6%, green 20%, green 60%, yellow 80%, orange 100%)`;
    if (cpu <= 93) return `linear-gradient(to right, lightgreen 0%, lightgreen 6%, green 18%, green 60%, yellow 80%, orange 100%)`;
    if (cpu <= 94) return `linear-gradient(to right, lightgreen 0%, lightgreen 6%, green 16%, green 60%, yellow 80%, orange 100%)`;
    if (cpu <= 95) return `linear-gradient(to right, lightgreen 0%, lightgreen 6%, green 14%, green 60%, yellow 80%, orange 98%, red 100%)`;
    if (cpu <= 96) return `linear-gradient(to right, lightgreen 0%, lightgreen 4%, green 12%, green 60%, yellow 80%, orange 96%, red 100%)`;
    if (cpu <= 97) return `linear-gradient(to right, lightgreen 0%, lightgreen 4%, green 10%, green 60%, yellow 80%, orange 94%, red 100%)`;
    if (cpu <= 98) return `linear-gradient(to right, lightgreen 0%, lightgreen 4%, green 10%, green 60%, yellow 80%, orange 92%, red 100%)`;
    if (cpu <= 99) return `linear-gradient(to right, lightgreen 0%, lightgreen 2%, green 8%, green 60%, yellow 80%, orange 90%, red 100%)`;
    return `linear-gradient(to right, lightgreen 0%, lightgreen 2%, green 8%, green 60%, yellow 80%, orange 90%, red 100%)`;
  }
}