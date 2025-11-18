## Blog Post

### 1. What are some differences between interfaces and types in TypeScript?


TypeScript-এ `interface` এবং `type` উভয়ই টাইপ ডিফিনিশনের জন্য ব্যবহার করা হয়, কিন্তু তাদের মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য রয়েছে:

**Interface:**
- `interface` শুধুমাত্র অবজেক্টের স্ট্রাকচার ডিফাইন করতে ব্যবহৃত হয়
- এটি এক্সটেন্ড করা যায় (`extends` keyword ব্যবহার করে)
- ডিক্লারেশন মার্জিং (declaration merging) সাপোর্ট করে
- ক্লাস দ্বারা ইমপ্লিমেন্ট করা যায়

**Type:**
- `type` যেকোনো টাইপের আলias তৈরি করতে পারে
- ইউনিয়ন, ইন্টারসেকশন এবং প্রিমিটিভ টাইপ ডিফাইন করতে পারে
- এক্সটেন্ড করা যায় না কিন্তু ইন্টারসেকশনের মাধ্যমে কম্বাইন করা যায়
- ডিক্লারেশন মার্জিং সাপোর্ট করে না

**উদাহরণ:**
```typescript
// Interface
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: number;
}

// Type
type ID = string | number;
type User = Person & { userId: ID };



### 2. Explain the difference between any, unknown, and never types in TypeScript.

// any - যেকোনো অপারেশন করা যায়
let anyValue: any = "hello";
anyValue.toUpperCase(); // কাজ করবে

// unknown - টাইপ চেকিং প্রয়োজন
let unknownValue: unknown = "hello";
// unknownValue.toUpperCase(); // এরর দেবে
if (typeof unknownValue === "string") {
  unknownValue.toUpperCase(); // এখন কাজ করবে
}

// never - কোনো ভ্যালু নেই
function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}