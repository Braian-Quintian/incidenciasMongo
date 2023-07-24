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
export class Incidencia {
    constructor(p1, p2, p3, p4, p5, p6, p7, p8) {
        this.date = p1;
        this.description = p2;
        this.equipment_id = p3;
        this.status_id = p4;
        this.type_incident = p5;
        this.id_trainer = p6;
        this.category_id = p7;
    }
}
__decorate([
    Expose({ name: 'fecha' }),
    IsString({ message: 'Date must be a string' }),
    Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'Invalid date format. Date must be in YYYY-MM-DD format' }),
    __metadata("design:type", String)
], Incidencia.prototype, "date", void 0);
__decorate([
    Expose({ name: 'descripcion' }),
    IsString({ message: 'Description must be a string' }),
    Matches(/^[\w\s,]+$/, { message: 'Description can only contain letters, numbers, spaces, and commas' }),
    __metadata("design:type", String)
], Incidencia.prototype, "description", void 0);
__decorate([
    Expose({ name: 'equipo_id' }),
    IsInt({ message: 'Equipment must be an integer' }),
    Min(0, { message: 'Equipment must be greater than or equal to 0' }),
    __metadata("design:type", Number)
], Incidencia.prototype, "equipment_id", void 0);
__decorate([
    Expose({ name: 'estado_id' }),
    IsInt({ message: 'State must be an integer' }),
    Min(0, { message: 'State must be greater than or equal to 0' }),
    Max(5, { message: 'State must be less than or equal to 5' }),
    __metadata("design:type", Number)
], Incidencia.prototype, "status_id", void 0);
__decorate([
    Expose({ name: 'tipo_incidencia' }),
    IsInt({ message: 'Type must be an integer' }),
    Min(0, { message: 'Type must be greater than or equal to 0' }),
    Max(3, { message: 'Type must be less than or equal to 3' }),
    __metadata("design:type", Number)
], Incidencia.prototype, "type_incident", void 0);
__decorate([
    Expose({ name: 'trainer_id' }),
    IsInt({ message: 'Trainer must be an integer' }),
    Min(0, { message: 'Trainer must be greater than or equal to 0' }),
    __metadata("design:type", Number)
], Incidencia.prototype, "id_trainer", void 0);
__decorate([
    Expose({ name: 'categoria_id' }),
    IsInt({ message: 'Category must be an integer' }),
    Min(0, { message: 'Category must be greater than or equal to 0' }),
    Max(2, { message: 'Category must be less than or equal to 2' }),
    __metadata("design:type", Number)
], Incidencia.prototype, "category_id", void 0);
