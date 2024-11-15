import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"

// saveContactAPI
export const saveContactAPI = async (contactDetails)=>{
    return await commonAPI("POST",`${SERVERURL}/contacts`,contactDetails)
}

// getContactAPI
export const getAllContactsAPI = async ()=>{
    return await commonAPI("GET",`${SERVERURL}/contacts`,{})
}

// deleteContactAPI
export const deleteContactAPI = async (id)=>{
    return await commonAPI("DELETE",`${SERVERURL}/contacts/${id}`,{})
}

// updateContactAPI
export const updateContactAPI = async (contactDetails)=>{
    return await commonAPI("PUT",`${SERVERURL}/contacts/${contactDetails.id}`,contactDetails)
}