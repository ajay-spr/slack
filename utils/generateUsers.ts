import { User } from "@/types";

const createUser = (fullName: string, displayName:string, id:string, profilePic?:string) => {
    const user:User = {} as User
    user.displayName = displayName
    user.fullName = fullName
    user.id = id
    user.profilePicURL = profilePic
    return user
}

const UMessi = createUser("Leo Messi", "messi", "243");
const UHaaland = createUser("Erling Haaland", "haaland", "33");
const URonaldo = createUser("Cristiano Ronaldo", "ronaldo", "7");
const UNeymar = createUser("Neymar Jr.", "neymar", "10");
const USalah = createUser("Mohamed Salah", "salah", "11");
const UDeBruyne = createUser("Kevin De Bruyne", "debruyne", "17");
const UKane = createUser("Harry Kane", "kane", "9");
const UBenzema = createUser("Karim Benzema", "benzema", "20");
const UMane = createUser("Sadio Mane", "mane", "10");
const UMbappe = createUser("Kylian Mbappe", "mbappe", "7");

export const users: User[] = [UMessi, UHaaland, URonaldo, UNeymar, USalah, UDeBruyne, UKane, UBenzema, UMane, UMbappe]

export const getUserFromId = (userId: string) => {
    return users.find(user => user.id == userId)
}