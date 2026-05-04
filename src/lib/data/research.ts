export interface ResearchEntry {
  title: string;
  year: number;
  status: 'published' | 'preprint';
  abstract: string;
  coauthors?: string[];
  github?: string;
  arxiv?: string;
  pdf?: string;
}

export const research: ResearchEntry[] = [
  {
    title: 'Automatic Short Answer Grading in an Online Quiz System',
    year: 2019,
    status: 'preprint',
    abstract: 'This thesis researches the problem of Automatic Short Answer Grading (ASAG) in order to build an automatic grading module for short-text responses. This module is developed for an online Learning Management System (LMS) called Stembord. A Multi-layer Perceptron model is the best performing model based on the features obtained during research. This research also informs the design and implementation of the short-answer grading module which is consequently integrated into an API service and called by the Stembord application.',
    github: 'https://github.com/DataDaoDe/automatic-short-answer-grading',
    pdf: 'https://github.com/DataDaoDe/automatic-short-answer-grading/blob/master/ASAG-in-online-quiz-system.pdf',
  },
  {
    title: 'Deep Learning for Laryngoscopic Tissue Analysis',
    year: 2017,
    status: 'preprint',
    coauthors: ['Jörg Lohscheller'],
    abstract: 'This paper studies tissue classification for laryngoscopic narrow-band images using deep learning techniques, specifically, convolutional neural networks (CNN). Solving the problem of tissue differentiation in an automated way can improve medical professionals decision-making capabilities by augmenting available diagnostic information in screening and early stage diagnosis of laryngeal cancers and, thereby, improve patient outcomes. When differentiating between benign and precancerous or cancerous tissue contours a recall of 99.86% was achieved. Additionally, when classifying between benign and papilloma tissues a contour level recall of 92.31% was obtained. Other classifications proved much more difficult for the models to learn, especially the various differences between papillomas, dysplasias and carcinomas. When performing the four class classification task of correctly distinguishing selected tissues as either Benign, Papilloma, Dysplasia or Carcinoma the recall score was 60.89%. This investigation shows that there remain difficulties in differentiating certain tissue classes with CNNs, specifically dysplasias, and to a lesser degree other anomalous versions of papillomas and even healthy tissues, however, the ability to differentiate between healthy and either cancerous or precancerous tissue was established and these results could be interesting to those building laryngoscopic early stage diagnosis support systems and looking for a starting point for evaluating current capabilities at this task.',
    github: 'https://github.com/DataDaoDe/deep-learning-for-laryngoscopic-tissue-analysis',
    pdf: 'https://github.com/DataDaoDe/deep-learning-for-laryngoscopic-tissue-analysis/blob/master/deep_learning_for_larnx.pdf',
  },
];