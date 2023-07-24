var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose } from "class-transformer";
import { IsString, Matches, IsInt, Min, Max } from "class-validator";
export class Equipo {
    constructor(p1, p2, p3, p4) {
        this.name = p1;
        this.brand = p2;
        this.model = p3;
        this.serial_number = p4;
    }
}
__decorate([
    Expose({ name: 'nombre' }),
    IsString({ message: 'Name must be a string' }),
    Matches(/^[a-zA-Z]+$/, { message: 'Name can only contain letters' }),
    __metadata("design:type", String)
], Equipo.prototype, "name", void 0);
__decorate([
    Expose({ name: 'salon' }),
    IsInt({ message: 'Classroom must be an integer' }),
    Min(0, { message: 'Classroom must be greater than or equal to 0' }),
    Max(9, { message: 'Classroom must be less than or equal to 9' }),
    __metadata("design:type", Number)
], Equipo.prototype, "classroom", void 0);
__decorate([
    Expose({ name: 'marca' }),
    IsString({ message: 'Brand must be a string' }),
    Matches(/^[a-zA-Z]+$/, { message: 'Brand can only contain letters' }),
    __metadata("design:type", String)
], Equipo.prototype, "brand", void 0);
__decorate([
    Expose({ name: 'modelo' }),
    IsString({ message: 'Model must be a string' }),
    Matches(/^[a-zA-Z]+$/, { message: 'Model can only contain letters' }),
    __metadata("design:type", String)
], Equipo.prototype, "model", void 0);
__decorate([
    Expose({ name: 'numero_serie' }),
    IsString({ message: 'Serial number must be a string' }),
    Matches(/^[a-zA-Z0-9]+$/, { message: 'Serial number can only contain letters and numbers' }),
    __metadata("design:type", String)
], Equipo.prototype, "serial_number", void 0);
