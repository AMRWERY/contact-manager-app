import axios from 'axios';

export class ContactServices {
    static serverUrl = `http://localhost:3000`;

    static getAllContacts() {
        const dataUrl = `${this.serverUrl}/contacts`;
        return axios.get(dataUrl)
    }

    static getContact(contactID) {
        const dataUrl = `${this.serverUrl}/contacts/${contactID}`;
        return axios.get(dataUrl)
    }

    static createContact(contact) {
        const dataUrl = `${this.serverUrl}/contacts`;
        return axios.post(dataUrl, contact)
    }

    static updateContact(contact, contactID) {
        const dataUrl = `${this.serverUrl}/contacts/${contactID}`;
        return axios.put(dataUrl, contact)
    }

    static deleteContact(contactID) {
        const dataUrl = `${this.serverUrl}/contacts/${contactID}`;
        return axios.delete(dataUrl)
    }

    static getAllGroups() {
        const dataUrl = `${this.serverUrl}/groups`;
        return axios.get(dataUrl)
    }

    static getGroup(contact) {
        const groupId = contact.groupId;
        const dataUrl = `${this.serverUrl}/groups/${groupId}`;
        return axios.get(dataUrl)
    }
}