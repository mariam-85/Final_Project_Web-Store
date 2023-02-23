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
			<section className={['wrapper', style.cat_section].join(' ')}>
				<div className={style.cat_title}>
                <p>Categories</p>
                </div>
            <div className={style.cat_card}>
					{categories.map((el, index) => (
						<CategoryCard key={index} {...el} />
					))}
				</div>
			</section>
		);
}
