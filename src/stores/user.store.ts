import { create } from "zustand";

// 공유데이터
interface UserStore {
    loginUserId: String,
    setLoginUserId : (loginUserId: string) => void,
    loginUserRole: string,
    setLoginUserRole: (loginUserRole: string) => void, 
}

// 초기화 
const useUserStore = create<UserStore>(set => ({
    loginUserId : '',
    setLoginUserId: (loginUserId: String) => set(state => ({ ...state, loginUserId})),
    loginUserRole: '',
    setLoginUserRole: (loginUserRole: string) => set(state => ({ ...state, loginUserRole}))
}));

export default useUserStore;