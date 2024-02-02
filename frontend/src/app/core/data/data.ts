import {pageNavigation} from "../model/pageNavigation";
import {socialMediaNavigation} from "../model/socialMediaNavigation";
import {Filter} from "../model/filter";

export const navbarLink: pageNavigation[] = [
  {path: '', text: 'Hakkımızda'},
  {path: '', text: 'Jüri - Yarışma Yazılımı'},
  {path: '', text: 'Word Ninja'},
  {path: '', text: 'Word Pyramids'}
]

export const socialMedia: socialMediaNavigation[] = [
  {
    url: 'https://www.instagram.com/mobilerast/',
    text: 'Youtube',
    img: 'assets/img/social-media/youtube.svg',
    alt: 'Youtube'
  },
  {url: '', text: 'Instagram', img: 'assets/img/social-media/instagram.svg', alt: 'Instagram'},
  {url: 'https://www.behance.net/rastmobile', text: 'Be', img: 'assets/img/social-media/be.svg', alt: 'Behance'},
  {
    url: 'https://www.linkedin.com/company/rastmobile/',
    text: 'Linkedin',
    img: 'assets/img/social-media/linkedin.svg',
    alt: 'LinkedIn'
  },
]

export const filters: Filter[] = [
  {name: 'link', type: 'filter', inputType: 'radio'},
  {name: 'name', type: 'filter', inputType: 'radio'}
]
