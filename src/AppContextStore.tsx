import { createContext,useContext,useState } from 'react';
import {ListGraphInputProps} from './components/atoms/types'

const AppContext = createContext({});

import { ReactNode } from 'react';

 function AppContextProvider({ children }: { children: ReactNode }) {
    const [prompt, setPrompt] = useState<string>();
    const [goals, setGoals] = useState<ListGraphInputProps[]>([{ title: 'Buy a Car', description: 'description1',cost:"R203634", startDate: '2023-11-11', endDate: '2024-11-01', model: 'model', yearOfManufacture: 'yearOfManufacture', maintenance: 'maintenance', insurance: 'insurance', repairs: 'repairs' }]);
    return (
        <AppContext.Provider value={{prompt,setPrompt,goals,setGoals}}>
            {children}
        </AppContext.Provider>
    );
}

export const useAppContext = () => useContext(AppContext);
export default AppContextProvider;