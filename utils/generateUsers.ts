import { User } from "@/types";

const createUser = (fullName: string, displayName:string, id:string, profilePic?:string) => {
    const user:User = {} as User
    user.displayName = displayName
    user.fullName = fullName
    user.id = id
    user.profilePicURL = profilePic
    return user
}

export const UMessi = createUser("Leo Messi", "messi", "243");
export const UHaaland = createUser("Erling Haaland", "haaland", "33");
export const URonaldo = createUser("Cristiano Ronaldo", "ronaldo", "7");
export const UNeymar = createUser("Neymar Jr.", "neymar", "10");
export const USalah = createUser("Mohamed Salah", "salah", "11");
export const UDeBruyne = createUser("Kevin De Bruyne", "debruyne", "17");
export const UKane = createUser("Harry Kane", "kane", "9");
export const UBenzema = createUser("Karim Benzema", "benzema", "20");
export const UMane = createUser("Sadio Mane", "mane", "10");
export const UMbappe = createUser("Kylian Mbappe", "mbappe", "7");


export const users: User[] = [UMessi, UHaaland, URonaldo, UNeymar, USalah, UDeBruyne, UKane, UBenzema, UMane, UMbappe]