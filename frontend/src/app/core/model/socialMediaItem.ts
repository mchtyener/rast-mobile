export interface SocialMediaItem {
  _id?: number;
  link: string
  description: string
  name: string
}
export class ISocialMediaItem implements SocialMediaItem {
  _id?: number;
  link: string
  description: string
  name: string
  constructor(data: ISocialMediaItem) {
    this._id = data?._id;
    this.link = data.link;
    this.description = data.description;
    this.name = data.name;
  }
}
