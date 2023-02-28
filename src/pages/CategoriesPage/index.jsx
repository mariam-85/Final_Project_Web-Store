import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategoryCard from '../../components/CategoryCard';
import { load_categories } from '../../requests/categories_request';
import style from './index.module.css';

export default function CategoriesPage() {
	const dispatch = useDispatch();
	const categories = useSelector((state) => state.categories);

	useEffect(() => {
		dispatch(load_categories);
	}, []);

	

    return (
			<section className={['wrapper'].join(' ')}>
				<div className={style.categories_block}>
                <p className={style.categories_block}>Categories</p>
                </div>
            <div className={style.categories_card}>
					{categories.map((el, index) => (
						<CategoryCard key={index} {...el} />
					))}
				</div>
			</section>
		);
}
