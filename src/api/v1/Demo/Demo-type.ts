export interface DemoClassType {
  title: string; 
  videoURL: string;
  subjectId: string;
  batchId: string;
  teacherId: string;
  status: 'Draft' | 'Published';
}
export interface UpdateDemoClassType {
  title: string | undefined; 
  videoURL: string | undefined;
  subjectId: string | undefined;
  batchId: string | undefined;
  teacherId: string | undefined;
  status: 'Draft' | 'Published' | undefined;
}