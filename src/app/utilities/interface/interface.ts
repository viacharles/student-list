import { Admin, Student } from "src/app/modules/shared/models/student.model";

export interface Class {
    id: number,
    students:Student[],
    admins:Admin[],
}