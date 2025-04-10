import { BeforeInsert, BeforeUpdate, Column, Entity, Generated, PrimaryColumn } from "typeorm";

@Entity('users')
export class UserEntity {
  @PrimaryColumn('uuid')
  @Generated('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column()
  phone: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: true })
  status: boolean;

  @Column({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @Column({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;
  
  @BeforeInsert()
  setCreatedAt() {
    const now = new Date();
    this.createdAt = now;
    this.updatedAt = now;
  }

  @BeforeUpdate()
  setUpdatedAt() {
    this.updatedAt = new Date();
  }
}