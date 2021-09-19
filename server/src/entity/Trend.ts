import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { Field, ID, ObjectType } from "type-graphql";
import { View } from "./View";

@ObjectType()
@Entity("trends")
export class Trend extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field(() => String, { nullable: true })
  @Column({ type: "varchar", nullable: true })
  source: string;

  @Field(() => String, { nullable: true })
  @Column({ type: "text", nullable: true })
  sourceUrl: string;

  @Field(() => String, { nullable: true })
  @Column({ type: "text", nullable: true })
  imageUrl: string;

  @OneToMany(() => View, (view) => view.trend)
  views: View[];

  @Field()
  @Column({ type: "text" })
  body: string;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;
}
