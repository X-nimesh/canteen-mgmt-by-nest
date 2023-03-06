import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class DemoTable {
  @PrimaryKey()
  userId!: number;
  @Property()
  name: string;
  @Property()
  message: string;
  constructor(name: string, message: string) {
    this.name = name;
    this.message = message;
  }
}
