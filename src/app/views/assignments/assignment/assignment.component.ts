import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AssignmentSubmissionDialogComponent);
    console.log('The dialog was opened')

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   // submit form and do all necessary actions
    // });
  }

  ngOnInit() {
  }

}

@Component({
  selector: 'app-assignment-submission-dialog',
  templateUrl: 'assignment-submission-dialog.html',
})
export class AssignmentSubmissionDialogComponent {

  constructor(private submitted: MatSnackBar){

  }
  //   public dialogRef: MatDialogRef<AssignmentSubmissionDialogComponent>,
  //   @Inject(MAT_DIALOG_DATA) public data: SubmitAssignment) {}
  //
  // cancelSubmission(): void {
  //   this.dialogRef.close();
  // }

  submitAssignment() {
    const submitDate = new Date();
    this.submitted.open('Assignment submitted!', submitDate.toDateString(), {
      duration: 2500,
    });
  }
}