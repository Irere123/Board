import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Field, ID, ObjectType } from "type-graphql";
import { Trend } from "./Trend";

@ObjectType()
@Entity("views")
export class View extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field(() => ID)
  @Column()
  trendId: string;

  @ManyToOne(() => Trend, (trend) => trend.views)
  @JoinColumn({ name: "trendId" })
  trend: Trend;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;
}
