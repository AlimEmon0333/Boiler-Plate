 import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, onValue, ref, set, } from "firebase/database";
import { app } from "./firebaseConfig";
import { error } from "console";
let auth = getAuth(app)
let database = getDatabase(app)
export const SignUp = (body: any) => {
    return new Promise<any>((resolve, reject) => {
        if (!body.Email || !body.Password) {
            reject("Please enter valid user Name or Email")
        } else {
            createUserWithEmailAndPassword(auth, body.Email, body.Password)
                .then(res => {
                    let id = res.user.uid;
                    body.id = id;
                    const reference = ref(database, `users/${id}`)
                    set(reference, body)
                        .then(user => {
                            resolve('user created successfully')
                        })
                        .catch(errs => {
                            reject(errs)
                        })
                }).catch(error => {
                    
                    reject('This email OR Password in not valid Please Enter Valid Email or Upto 6 digits Password  ')
                })
        }
    })
}
export const Login = (body: any) => {
    return new Promise<any>((resolve, reject) => {
        if(!body.Email || !body.Password){
            reject("Email And Password Is Required")
        }else{
            signInWithEmailAndPassword(auth , body.Email , body.Password).then(res =>{
            let id = res.user.uid
                const referece = ref(database, `users/${id}`)

                onValue(referece, (data) => {
                    if (data.exists()) {
                        resolve(data.val())
                    } else {
                        reject("No Data Found")
                    }
                })


            }).catch(err=>{
                resolve('This Email Or Password Does Not Exist')
            })
        }
    }) 
}