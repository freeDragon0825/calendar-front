export interface IRoute {
  index?: boolean;
  path: string;
  guard?: React.FC;
  layout?: React.FC;
  component: React.FC;
}
