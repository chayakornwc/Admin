export default {
  items: [
    {
      name: 'สถิติการเข้าร่วมอบรม',
      url: '/dashboard',
      icon: 'fa fa-line-chart',
     
    },
    {
      title: true,
      name: 'Course',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'จัดการหลักสูตร',
      url: '/course',
      icon: 'icon-pencil',
    },
    {
      name: 'จัดการการอบรม',
      url: '/course/period',
      icon: 'icon-calendar',
    },
    {
      name: 'คลังข้อสอบ',
      url: '/examination',
      icon: 'icon-calendar',
    },
    {
      title: true,
      name: 'CONFIGURATION',
      wrapper: {
        element: '',
        attributes: {}
      },
    },
    {
      name: 'ห้องมูลห้องปฏิบัติการ',
      url: '/operationRoom',
      icon: 'fa fa-building',
    },
    {
      name: 'ข้อมูลผู้ใช้งาน',
      url: '/users',
      icon: 'fa fa-users',
    },
    {
      name: 'ออกใบวุฒิบัตร',
      url: '/cert',
      icon: 'fa fa-certificate',
    },
    {
      name: 'รายงานการเข้าร่วมอบรม',
      url: '/report',
      icon: 'fa fa-coffee',
    },
  ]
};
