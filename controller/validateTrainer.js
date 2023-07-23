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
import { IsString, IsEmail, Matches } from "class-validator";
export class Trainer {
    constructor(p1, p2, p3, p4, p5, p6, p7) {
        this.name = p1;
        this.personalEmail = p2;
        this.corporativeEmail = p3;
        this.mobilePhone = p4;
        this.residencePhone = p5;
        this.workPhone = p6;
        this.workMobilePhone = p7;
    }
}
__decorate([
    Expose({ name: 'nombre' }),
    IsString({ message: 'Name must be a string' }),
    Matches(/^[a-zA-Z]+$/, { message: 'Name can only contain letters' }),
    __metadata("design:type", String)
], Trainer.prototype, "name", void 0);
__decorate([
    Expose({ name: 'email_personal' }),
    IsEmail({}, { message: "Invalid format for personal email" }),
    __metadata("design:type", String)
], Trainer.prototype, "personalEmail", void 0);
__decorate([
    Expose({ name: 'email_corporativo' }),
    IsEmail({}, { message: "Invalid format for personal email" }),
    __metadata("design:type", String)
], Trainer.prototype, "corporativeEmail", void 0);
__decorate([
    Expose({ name: 'telefono_movil' }),
    IsString({ message: 'Mobile phone must be a string' }),
    Matches(/^\d{10}$/, { message: 'Mobile phone must have 10 digits' }),
    __metadata("design:type", String)
], Trainer.prototype, "mobilePhone", void 0);
__decorate([
    Expose({ name: 'telefono_residencia' }),
    IsString({ message: 'Residence phone must be a string' }),
    Matches(/^\d{10}$/, { message: 'Residence phone must have 10 digits' }),
    __metadata("design:type", String)
], Trainer.prototype, "residencePhone", void 0);
__decorate([
    Expose({ name: 'telefono_empresa' }),
    IsString({ message: 'Work phone must be a string' }),
    Matches(/^\d{10}$/, { message: 'Work phone must have 10 digits' }),
    __metadata("design:type", String)
], Trainer.prototype, "workPhone", void 0);
__decorate([
    Expose({ name: 'telefono_movil_empresa' }),
    IsString({ message: 'Work mobile phone must be a string' }),
    Matches(/^\d{10}$/, { message: 'Work mobile phone must have 10 digits' }),
    __metadata("design:type", String)
], Trainer.prototype, "workMobilePhone", void 0);
