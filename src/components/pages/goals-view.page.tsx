

import React from 'react';
import { ListGraph } from '../atoms/index';
import { ListGraphInputProps } from '../atoms/types';

export function GoalsListGraph(): JSX.Element {
    const listGraphInput: ListGraphInputProps[] = [{  title: 'title', description: 'description',startDate: '2021-01-01',endDate: '2021-01-01',model: 'model',yearOfManufacture: 'yearOfManufacture',maintenance: 'maintenance',insurance: 'insurance',repairs: 'repairs' }, 
                                                   {  title: 'title1', description: 'description1' ,startDate: '2021-01-01',endDate: '2021-01-01',model: 'model',yearOfManufacture: 'yearOfManufacture',maintenance: 'maintenance',insurance: 'insurance',repairs: 'repairs' },
                                                  {  title: 'title2', description: 'description2' ,startDate: '2021-01-01',endDate: '2021-01-01',model: 'model',yearOfManufacture: 'yearOfManufacture',maintenance: 'maintenance',insurance: 'insurance',repairs: 'repairs' },
                                                  {  title: 'title3', description: 'description3' ,startDate: '2021-01-01',endDate: '2021-01-01',model: 'model',yearOfManufacture: 'yearOfManufacture',maintenance: 'maintenance',insurance: 'insurance',repairs: 'repairs'},
                                                  { title: 'title4', description: 'description4' ,startDate: '2021-01-01',endDate: '2021-01-01',model: 'model',yearOfManufacture: 'yearOfManufacture',maintenance: 'maintenance',insurance: 'insurance',repairs: 'repairs'}];
    return <ListGraph inputs={listGraphInput} />;
}
