import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';
import { Container, TabButton, TabList } from './DetailsInteractive.styled';
import { Features } from 'components/Features/Features';
import { Reviews } from 'components/Reviews/Reviews';
import { BookForm } from 'components/BookForm/BookForm';

export const DetailesInteractive = ({ data }) => {
  const [activeTab, setActiveTab] = useState('features');

  return (
    <>
      <TabList>
        <li key={nanoid()}>
          <TabButton
            type="button"
            onClick={() => setActiveTab('features')}
            $active={activeTab === 'features' ? true : false}
          >
            Features
          </TabButton>
        </li>
        <li key={nanoid()}>
          <TabButton
            type="button"
            onClick={() => setActiveTab('reviews')}
            $active={activeTab === 'reviews' ? true : false}
          >
            Reviews
          </TabButton>
        </li>
      </TabList>
      <Container>
        {activeTab === 'features' ? (
          <Features data={data} />
        ) : (
          <Reviews data={data} />
        )}

        <BookForm />
      </Container>
    </>
  );
};
