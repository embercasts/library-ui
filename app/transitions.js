const duration = 600;

export default function(){

  this.transition(
    this.hasClass('modal-if'),
    this.use('fade', { duration })
  );

  this.transition(
    this.fromRoute('book.detail.index'),
    this.use('toLeft', { duration }),
    this.reverse('toRight', { duration })
  );

  this.transition(
    this.fromRoute('author.detail.index'),
    this.use('fade', { duration }),
    this.reverse('fade', { duration })
  );

  // Add your transitions here, like:
  //   this.transition(
  //     this.fromRoute('people.index'),
  //     this.toRoute('people.detail'),
  //     this.use('toLeft'),
  //     this.reverse('toRight')
  //   );
}
