import { UserResource } from "@clerk/types"
import { Metadata } from "../types/types";

export const updateFirstAndLast = async (user: UserResource, firstName: string, lastName: string) => {
    await user.update({
        firstName: firstName,
        lastName: lastName,
    })
}

export const updateMetadata = async (user: UserResource, metadataName: string, metadata: Metadata) => {
    const prevMeta = user.unsafeMetadata;
    await user.update({
        unsafeMetadata: {
            ...prevMeta,
            [metadataName]: metadata
        }
    })
}

