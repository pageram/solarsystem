export class SolarSystemObject {
  title: string;
  age: string;
  imageSrc: string;
  description: string;
  avatar: string;

  constructor (
    title: string, age: string,
    imageSrc: string, description: string, avatar: string
  ) {
    this.title = title;
    this.age = age;
    this.imageSrc = imageSrc;
    this.description = description;
    this.avatar = avatar;
  }
}