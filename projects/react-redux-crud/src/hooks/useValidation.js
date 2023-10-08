
import { expression } from '../assets/constants'

export const useValidation = (e, { setNameCheck, setEmailCheck, setGitCheck }) => {

    const typeData = e.target.name
    const text = e.target.value

    switch(typeData) {
        case 'name':
            if (expression.name.test(text)) {
                 return setNameCheck('true');
            }
            return setNameCheck('false');
        case 'email':
            if (expression.email.test(text)) {
                return setEmailCheck('true')
            }
            return setEmailCheck('false')
        case "github":
            if (expression.github.test(text)) {
                return setGitCheck("true")
            }
            return setGitCheck("false")
    }
}