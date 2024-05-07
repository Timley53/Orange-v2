import { PieChart } from '@mui/x-charts/PieChart'
import React from 'react'
import { PageDataCategoryType } from '../Interface'
import { TotalCategory } from '../Utils/helperFxn'

interface Props {
  category: PageDataCategoryType[] | [],
}

const arr = [
  { id: 0, value: 10, label: 'series A',  },
  { id: 1, value: 15, label: 'series B',  },
  { id: 2, value: 20, label: 'series C',  },
  { id: 2, value: 20, label: 'series C',  },
  { id: 2, value: 20, label: 'series C',  },
  { id: 2, value: 20, label: 'series C',  },
  { id: 2, value: 20, label: 'series C',  },
  { id: 2, value: 20, label: 'series C',  },
  { id: 2, value: 20, label: 'series C',  },
]

function ExpDoughnutChart({category}:Props) {

    const catData = category ? category.map((exp) => {
      return {
        id: exp.id,
        label: exp.categoryTitle,
        value: TotalCategory(exp.categoryData)
      }
    } ) : arr;

  return (
    <div className='  md:h-[60vh] sm:h-full md:w-[60%] w-min-[200px] md:max-w-[450px] sm:w-[100%]  mx-auto my-3'>
        <PieChart
  series={[
    {
      data: [...catData] ,

      innerRadius: 41,
      outerRadius: 90,
      paddingAngle: 5,
      cornerRadius: 5,
      startAngle: -948,
      endAngle: 189,
      cx: 152,
      cy: 148,
    }
  ]}
/>
    </div>
  )
}

export default ExpDoughnutChart