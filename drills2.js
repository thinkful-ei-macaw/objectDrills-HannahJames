


//Enroll in summer school

const studentData = [
    {
      name: 'Tim',
      status: 'Current student',
      course: 'Biology',
    },
    {
      name: 'Sue',
      status: 'Withdrawn',
      course: 'Mathematics',
    },
    {
      name: 'Liz',
      status: 'On leave',
      course: 'Computer science',
    },
  ];
  
  function enrollInSummerSchool(students) {
    const newArr = [];

    students.forEach(student =>
        newArr.push({
            name: student.name,
            status: "In Summer school",
            course: student.course,
        }));
    
    return newArr;
  }
  
  /* From here down, you are not expected to understand.... for now :)
    Nothing to see here!
  
  */
  
  // tests
  
  function testIt() {
    var testData = [
      {
        name: 'Burt',
        status: 'Playing hooky',
        course: 'Biology',
      },
      {
        name: 'Melanie',
        status: 'Sick',
        course: 'Mathematics',
      },
      {
        name: 'Leonard',
        status: 'AWOL',
        course: 'Computer science',
      },
    ];
  
    var results = enrollInSummerSchool(testData);
  
    if (!(results && results instanceof Array)) {
      console.error('FAILURE: `enrollSummerSchool` must return an array');
      return;
    }
    var result = testData.every(function(student) {
      var match = results.find(function(_student) {
        return (
          _student.name === student.name &&
          _student.course === student.course &&
          _student.status.toLowerCase() === 'in summer school'
        );
      });
      return match !== undefined;
    });
    if (!result) {
      console.error(
        'FAILURE: `enrollSummerSchool` should return ' +
          'original key/value pairs for each student, and ' +
          'update `status` to "In Summer school": ' +
          JSON.stringify(results)
      );
    } else {
      console.info('SUCCESS: `enrollSummerSchool` is working');
    }
  }
  
  testIt();


// find by id
// you can pass in `scratchData` to test out `findByid`
// your function
const scratchData = [
    { id: 22, foo: 'bar' },
    { id: 28, foo: 'bizz' },
    { id: 19, foo: 'bazz' },
  ];
  
  function findById(items, idNum) {
    let arr = items;
    let item = arr[idNum-1];
    return item;
  }
  
  //
  
  function testIt() {
    const testData = [
      { id: 1, foo: 'bar' },
      { id: 2, foo: 'bizz' },
      { id: 3, bang: 'boo' },
    ];
    const result = findById(testData, 3);
    if (!(result && result !== null && typeof result === 'object')) {
      console.error('`findById` must return an object');
      return;
    }
    if (result.id !== 3) {
      console.error(
        'Asked for item with id of `3` but got back one with id of ' + result.id
      );
      return;
    }
    if (result.bang !== 'boo') {
      console.error(
        'Expected all key/value pairs from target object to be returned'
      );
      return;
    }
    console.log('SUCCESS: `findByid` is working');
  }
  
  testIt();
  