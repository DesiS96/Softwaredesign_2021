namespace Aufgabe3 {

    export class Date {

        public day: number;
        public month: number;
        public year: number;
        public uuid: number;

        constructor(_day: number, _month: number, _year: number, _uuid: number) {

            this.day = _day;
            this.month = _month;
            this.year = _year;
            this.uuid = _uuid;
        }
    }
}