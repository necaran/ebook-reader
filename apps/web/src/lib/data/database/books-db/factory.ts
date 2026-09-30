/**
 * @license BSD-3-Clause
 * Copyright (c) 2026, ッツ Reader Authors
 * All rights reserved.
 */

import type BooksDb from './versions/books-db';
import { openDB } from 'idb';

export function createBooksDb(name = 'books') {
  return openDB<BooksDb>(name, 6);
}
