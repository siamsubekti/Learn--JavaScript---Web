import { ADD_ARTICLE } from '../constants/actions-types';
import { ADD_CONTENT } from '../constants/actions-types';

export function addArticle(payload) {
    return { type : ADD_ARTICLE, payload };
}

export function addContent(payload) {
    return { type : ADD_CONTENT, payload }
}