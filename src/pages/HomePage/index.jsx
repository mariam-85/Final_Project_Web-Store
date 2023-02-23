import React from 'react'
import SeasonSaleBlock from '../../components/SeasonSaleBlock'
import DiscountBlock from '../../components/DiscountBlock'
import CategoriesContainer from '../../components/CategoriesContainer'
import SaleContainer from '../../components/SaleContainer'

export default function HomePage() {
  return (
    <div>
      <SeasonSaleBlock />
      <CategoriesContainer limit={4} />
      <DiscountBlock />
      <SaleContainer />
    </div>
  )
}
