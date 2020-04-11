import sanityClient from "@sanity/client"

export default sanityClient({
    projectId: "isuhgmk8", // you can find this in sanity.json
    dataset: "production", // or th name you chose in step 1
    useCdn: false, // `false` if you want to ensure fresh data
})