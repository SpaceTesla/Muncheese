import { db } from '@/utils/firebase';
import { NextResponse } from 'next/server';

const handler = async (req) => {
  if (req.method === 'GET') {
    try {
      const categoriesSnapshot = await db.collection('categories').get();
      const categories = categoriesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return NextResponse.json(categories);
    } catch (error) {
      return NextResponse.json(
        { error: 'Error fetching categories' },
        { status: 500 },
      );
    }
  } else {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
  }
};

export { handler as GET };
